#!/bin/sh -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cp .env .env.tmp
cp .env.prod.example .env

export NODE_ENV=production&&nvm exec npm run build

aws s3 sync build/ s3://block-scanner.cere.io --profile=cerebellum
# aws cloudfront create-invalidation --distribution-id **** --paths "/*" --profile=cerebellum

cp .env.tmp .env
rm -rf .env.tmp
