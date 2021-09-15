# Laboratory UI application

## Overview
This application is supposed to be used for any Substrate-based Network. 
It provides the following features:
- Block Scanner - get list of transactions by public key
- Friendbot/Faucet - send native tokens for Testnet on demand

This application depends on backend API, which can be found [here](https://github.com/Cerebellum-Network/laboratory-api).

## Release notes
### vNext
* Added support for chainbridge pallet method
* Renamed header in block-viewer

### v1.6.0
* Updated Network endpoints

### v1.5.0
* Updated networks

### v1.4.0
* Show a block hash of a transaction
* Add link to a block hash to view details in the block viewer
* Use archive node urls in config

### v1.3.0 [API: 1.5.0]
* Fixed header menu
* Added total issuance in peers tab.
* Added DDC metrics in peers tab.

### v1.2.0 [API: v1.4.0]
* Updated block-explorer to switch between networks.
* Added treasury balance

### v1.1.0
* Updated deployment script
* Added peers dashboard

### v1.0.1
* Updated license
* Added Last Synced Block
* Added user balance block

### v1.0.0
* Added Block Scanner app
* Added FriendBot app

## Quick Start
### Prepare ENV variables

Copy `.env.example` to `.env` file and provide ENV variables.
```bash
cp .env.example .env
```
### Run the application
```bash
nvm exec npm start
```
## Packaging
### How to deploy to AWS
* Copy `deploy.sh.example` to `deploy.sh`
* Make it executable:
```bash
chmod 777 ./deploy.sh
```
* Replace `YOUR_BUCKET_HERE` with your bucket name
* Replace `YOUR_DISTRIBUTION_ID` with your distribution ID
* Run deployment: 
```bash
./deploy.sh
```

## License 
License info can be found in the [LICENSE section](./LICENSE.md).
