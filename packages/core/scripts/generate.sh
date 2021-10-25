#!/bin/bash
cd packages/core

change_css_into_scss() {
    sleep 3
    mv src/components/$name/$name.css src/components/$name/$name.scss
    sed -i 's/.css/.scss/' src/components/$name/$name.tsx
    sed -i "s/tag: '$name'/tag: 'any-$name'/" src/components/$name/$name.tsx
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
