#!/bin/bash

# Change to the root directory of the project
cd packages/core || { echo "Error: 'packages/core' directory not found."; exit 1; }

change_css_into_scss() {
    sleep 3

    # Using basename to extract component name from the path, if provided
    name=$(basename "$name")

    # Perform sed replacements in one command instead of multiple
    sed -i -e "s/'$name'/'any-$name'/g" \
           -e "s|<$name>|<any-$name>|g" \
           -e "s|<\/$name>|<\/any-$name>|g" \
           src/components/"$name"/test/"$name".e2e.ts \
           src/components/"$name"/test/"$name".spec.tsx

    # Renaming .css to .scss
    mv src/components/"$name"/"$name".css src/components/"$name"/"$name".scss

    # Replace .css with .scss in the component file
    sed -i 's/\.css/.scss/' src/components/"$name"/"$name".tsx

    # Change 'tag' attribute value in the component file
    sed -i "s/tag: '$name'/tag: 'any-$name'/" src/components/"$name"/"$name".tsx
}

add_prefix() {
    # If the component name does not contain a '-', add the 'any-' prefix
    if [[ "$name" != *-* ]]; then
        echo "Component has no '-' so add prefix 'any-'"
        name="any-$name"
    fi
}

remove_prefix() {
    # If the component name contains 'any-', remove it and perform renaming
    if [[ "$name" == *any-* ]]; then
        real_name=${name//any-/}
        cp -r src/components/"$name" src/components/"$real_name"
        rm -rf src/components/"$name"
        mv src/components/"$real_name"/"$name".css src/components/"$real_name"/"$real_name".css
        mv src/components/"$real_name"/"$name".tsx src/components/"$real_name"/"$real_name".tsx
        mv src/components/"$real_name"/test/"$name".e2e.ts src/components/"$real_name"/test/"$real_name".e2e.ts
        mv src/components/"$real_name"/test/"$name".spec.tsx src/components/"$real_name"/test/"$real_name".spec.tsx

        # Perform sed replacements in one command instead of multiple
        sed -i -e "s/tag: 'any-$real_name'/tag: '$real_name'/" \
               -e "s/styleUrl: 'any-$real_name/styleUrl: '$real_name/" \
               src/components/"$real_name"/"$real_name".tsx

        name=$real_name
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
        comp_name=$name
        comp_suffix=$(basename "$name")
        add_prefix
        npx stencil generate "$comp_suffix"
        remove_prefix
        change_css_into_scss

        # If the name contains a path, create the necessary directories
        if [[ "$comp_name" == */* ]] || [[ "$comp_name" == *\* ]]; then
            mkdir -p "src/components/$comp_name"
            mv "src/components/$comp_suffix"/* "src/components/$comp_name"
            rm -rf "src/components/$comp_suffix"
        fi
    fi
else
    comp_suffix=$(basename "$1")
    add_prefix
    npx stencil generate "$comp_suffix"
    remove_prefix

    # Perform the CSS to SCSS conversion for the component
    change_css_into_scss

    # If the name contains a path, create the necessary directories
    if [[ "$1" == */* ]] || [[ "$1" == *\* ]]; then
        mkdir -p "src/components/$1"
        mv "src/components/$comp_suffix"/* "src/components/$1"
        rm -rf "src/components/$comp_suffix"
    fi
fi

# Move back to the parent directory
cd ../../
