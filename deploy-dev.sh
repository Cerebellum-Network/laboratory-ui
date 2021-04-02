#!/bin/sh -e

cp .env .env.tmp
cp .env.dev .env

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

export NODE_ENV=production&&nvm exec npm run build

aws s3 sync build/ s3://YOUR_BUCKET_HERE --profile=cerebellum
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

cp .env.tmp .env
rm -rf .env.tmp
