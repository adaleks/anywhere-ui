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

if [ -z "$1" ]; then
    echo Please type component name:
    read name

    if [ -z "$name" ]; then
        echo Component name is required!
        exit 0
    else
        npx stencil generate $name
        change_css_into_scss
    fi
else
    name=$1
    npx stencil generate $name
    change_css_into_scss
fi

cd ../../
