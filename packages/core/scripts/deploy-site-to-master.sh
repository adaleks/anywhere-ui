#!/bin/bash

# This should be your build command, the one that builds up the site
npm run build
# We change to the 'www' directory. If we do right now 'git branch' it should point to the 'master' branch
cd www
# We do a commit and push the deployed site to the 'master' branch
git add --all
git commit -m "deployed site to master"
git push --set-upstream origin master --force
# Switch back to the main folder of the repo. If we do right now 'git branch' it should point to the 'source' branch
cd ..