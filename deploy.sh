#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:anaelleltd/kusamawatch.git main:gh-pages

#git push -f git@github.com:username/hello-world.git master:gh-pages

cd -

# make the script executable
chmod +x deploy.sh

# add this to package.json file in root
#"deploy": "sh deploy.sh"