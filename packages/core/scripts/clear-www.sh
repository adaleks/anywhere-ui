#!/bin/bash

cd www

shopt -s extglob

rm -rf !(.git)

cd ..