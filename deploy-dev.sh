#!/bin/sh -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cp .env .env.tmp
cp .env.dev.example .env

export NODE_ENV=production&&nvm exec npm run build

aws s3 sync build/ s3://block-scanner.dev.cere.io --profile=cerebellum
aws cloudfront create-invalidation --distribution-id E3T28H0S7W90WZ --paths "/*" --profile=cerebellum

cp .env.tmp .env
rm -rf .env.tmp
