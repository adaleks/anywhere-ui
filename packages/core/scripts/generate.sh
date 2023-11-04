#!/bin/bash

# Change to the root directory of the project
cd packages/core || { echo "Error: 'packages/core' directory not found."; exit 1; }

change_css_into_scss() {
    sleep 3

    real_name=${name//any-/}

    # Renaming .css to .scss
    mv src/components/"$(basename "$name")"/"$(basename "$name")".css src/components/"$(basename "$name")"/"$(basename "$name")".scss

    # Replace .css with .scss in the component file
    sed -i 's/\.css/.scss/' src/components/"$(basename "$name")"/"$(basename "$name")".tsx
}

add_prefix() {
    echo $name
    # If the component name does not contain a '-', add the 'any-' prefix
    if [[ "$comp_suffix" != *-* ]]; then
        echo "Component has no '-' so add prefix 'any-'"
        comp_suffix="any-$comp_suffix"
    fi
}

remove_prefix() {
    # If the component name contains 'any-', remove it and perform renaming
    if [[ "$comp_suffix" == *any-* ]]; then
        real_name=${name//any-/}

        echo $comp_suffix
        mv src/components/"$comp_suffix"/"$comp_suffix".css src/components/"$comp_suffix"/"$(basename "$name")".css
        mv src/components/"$comp_suffix"/"$comp_suffix".tsx src/components/"$comp_suffix"/"$(basename "$name")".tsx
        mv src/components/"$comp_suffix"/test/"$comp_suffix".e2e.ts src/components/"$comp_suffix"/test/"$(basename "$name")".e2e.ts
        mv src/components/"$comp_suffix"/test/"$comp_suffix".spec.tsx src/components/"$comp_suffix"/test/"$(basename "$name")".spec.tsx

        cp -r src/components/"$comp_suffix" src/components/"$(basename "$name")"
        rm -rf src/components/"$comp_suffix"
        # Perform sed replacements in one command instead of multiple
        sed -i -e "s/from '..\\/any-$(basename "$name")/from '..\\/$(basename "$name")/" \
        src/components/"$(basename "$name")"/test/"$(basename "$name")".spec.tsx
        
        sed -i -e "s/styleUrl: 'any-$(basename "$name")/styleUrl: '$(basename "$name")/" \
        src/components/"$(basename "$name")"/"$(basename "$name")".tsx

    fi
}

name=$1
if [ -z "$name" ]; then
    echo "Please type component name:"
    read -r name

    if [ -z "$name" ]; then
        echo "Component name is required!"
        exit 1
    else
        comp_suffix=$(basename "$name")
        real_name=${name//any-/}
        add_prefix
        npx stencil generate "$comp_suffix"
        remove_prefix
        change_css_into_scss
    fi
else
    comp_suffix=$(basename "$name")
    real_name=${name//any-/}

    add_prefix
    npx stencil generate "$comp_suffix"
    remove_prefix

    # Perform the CSS to SCSS conversion for the component
    change_css_into_scss
fi


if [[ "$name" == */* ]] || [[ "$name" == *\* ]]; then
    mkdir -p "src/components/$real_name"
    mv "src/components/$(basename "$name")"/* "src/components/$real_name"
    rm -rf "src/components/$(basename "$name")"
fi
# Move back to the parent directory
cd ../../
