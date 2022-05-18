# Ocean Drive DApp

## About the project

The Ocean Drive DApp is a peer-to-peer file-sharing platform that runs on the CONUN blockchain network.

When files are uploaded, downloaded, or 'liked', these actions are registered in the blockchain as transactions.
This results in a decentralised system that doesn't rely on a single server storing the details needed to connect to peers to download files.

Drive requires a running instance of the CONUN Manager to connect to the blockchain network.
Under normal usage, the Drive app is started from the CONUN Manager. Be sure to download that application first.

### Download the app

The app is still currently in development. Links will be made available here when a release candidate is produced.

## Running the project from the repository

To run the project from this repository, first either clone the repo or download the files.
You will need yarn installed on your machine.

### Install Dependencies

```bash
yarn
```

### Starting Development

Start the app in the `dev` environment:

```bash
yarn dev
```

### Packaging for Production

Package the app:

```bash
yarn make
```
