#!/bin/bash
cd packages/core

change_css_into_scss() {
    sleep 3
    if [[ "$name" == *\/* ]] || [[ "$name" == *\\* ]]; then
        comp_name="${name##*/}"
        comp_prefix="${name%%/*}"

        mv src/components/$name/$comp_name.css src/components/$name/$comp_name.scss
        sed -i 's/.css/.scss/' src/components/$name/$comp_name.tsx
        sed -i "s/tag: '$comp_name'/tag: 'any-$comp_name'/" src/components/$name/$comp_name.tsx
        sed -i "s/'$comp_name'/'any-$comp_name'/" src/components/$name/test/$comp_name.e2e.ts
        sed -i "s/<$comp_name>/<any-$comp_name>/" src/components/$name/test/$comp_name.e2e.ts
        sed -i "s/<\/$comp_name>/<\/any-$comp_name>/" src/components/$name/test/$comp_name.e2e.ts
        sed -i "s/'$comp_name'/'any-$comp_name'/" src/components/$name/test/$comp_name.spec.tsx
        sed -i "s/<$comp_name>/<any-$comp_name>/" src/components/$name/test/$comp_name.spec.tsx
        sed -i "s/<\/$comp_name>/<\/any-$comp_name>/" src/components/$name/test/$comp_name.spec.tsx
        mv src/components/$name/$comp_name.tsx src/components/$comp_prefix/$comp_name.tsx
        mv src/components/$name/$comp_name.scss src/components/$comp_prefix/$comp_name.scss
        mv src/components/$name/test/* src/components/$comp_prefix/test/
        rm -rf src/components/$name/
    else
        sed -i "s/'$name'/'any-$name'/" src/components/$name/test/$name.e2e.ts
        sed -i "s/<$name>/<any-$name>/" src/components/$name/test/$name.e2e.ts
        sed -i "s/<\/$name>/<\/any-$name>/" src/components/$name/test/$name.e2e.ts
        sed -i "s/'$name'/'any-$name'/" src/components/$name/test/$name.spec.tsx
        sed -i "s/<$name>/<any-$name>/" src/components/$name/test/$name.spec.tsx
        sed -i "s/<\/$name>/<\/any-$name>/" src/components/$name/test/$name.spec.tsx
        mv src/components/$name/$name.css src/components/$name/$name.scss
        sed -i 's/.css/.scss/' src/components/$name/$name.tsx
        sed -i "s/tag: '$name'/tag: 'any-$name'/" src/components/$name/$name.tsx
    fi

}

add_prefix() {
    if [[ "$name" != *-* ]]; then
        echo "Component has no '-' so add prefix 'any-'"
        if [[ "$name" == *\/* ]] || [[ "$name" == *\\* ]]; then
            comp_name="${name##*/}"
            comp_prefix="${name%%/*}"
            comp_name="any-"$comp_name
            name=$comp_prefix"/"$comp_name
            echo "$name"
            echo "$comp_name"
            echo "$comp_prefix"
            echo "Deep level component without dash '-' is not supported right now"
            exit
        else
            name="any-"$name
            echo "$name"
        fi
    fi
}

remove_prefix() {
    if [[ "$name" == *any-* ]]; then
        WORDTOREMOVE="any-"
        if [[ "$name" == *\/* ]] || [[ "$name" == *\\* ]]; then
            echo "Deep level component without dash '-' is not supported right now"
            exit
        else
            real_name=${name//$WORDTOREMOVE/}
            mv src/components/$name src/components/$real_name
            mv src/components/$real_name/$name.css src/components/$real_name/$real_name.css
            mv src/components/$real_name/$name.tsx src/components/$real_name/$real_name.tsx
            mv src/components/$real_name/test/$name.e2e.ts src/components/$real_name/test/$real_name.e2e.ts
            mv src/components/$real_name/test/$name.spec.tsx src/components/$real_name/test/$real_name.spec.tsx
            sed -i "s/tag: any-'$name'/tag: '$name'/" src/components/$real_name/$real_name.tsx
            sed -i "s/any-$real_name/$real_name/" src/components/$real_name/test/$real_name.spec.tsx
            name=$real_name
        fi
    fi
}

if [ -z "$1" ]; then
    echo Please type component name:
    read name

    if [ -z "$name" ]; then
        echo Component name is required!
        exit 0
    else
        add_prefix
        npx stencil generate $name
        remove_prefix
        change_css_into_scss
    fi
else
    name=$1
    add_prefix
    npx stencil generate $name
    remove_prefix
    change_css_into_scss
fi

cd ../../
