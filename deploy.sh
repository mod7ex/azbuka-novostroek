DEFAULT_BRANCH="master"

BRANCH="${1:-$DEFAULT_BRANCH}"

git pull origin $BRANCH

npm run build

cd .output/server

npm i node-fetch-native

cd ../..

pm2 restart node .output/server/index.mjs