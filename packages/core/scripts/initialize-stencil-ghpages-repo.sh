#!/bin/bash

git init
git add .
git commit -m "first commit"
# Change the branch 'master' name to 'source'. In the 'source' branch is where we will deploy the source code of the site 
# (not the deployed one, this one goes in the 'master' branch')
git branch -m source
# Create an orphan branch called 'master', we will use this branch in order to push our deployed site
git checkout --orphan master
# Empty the 'master' branch and do an empty commit
git reset --hard
rm -rf *
#rm -rf .stencil
git add --all
git commit --allow-empty -m "init master branch"
git remote add origin https://github.com/adaleks/anywhere-ui-showcase.git # Here it goes your repo url
# Switch back to the 'source branch'
git checkout source
# Create an empty www folder. WARNING: from the time being you should avoid removing the 'www' folder
rm -rf www
mkdir www
# Install the dependencies (the checkout will have removed the 'node_modules' folder)
npm i
npm link anywhere-flex
# Add a new worktree in the 'www' folder onto the 'master' branch
git worktree add www master