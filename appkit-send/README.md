# Arc App Kit Send Demo

A simple demo for sending USDC on Arc Testnet using Circle App Kit.

## What this demo does

This script sends USDC from one Arc Testnet wallet to another using Circle App Kit.

## Network

- Chain: Arc Testnet
- Chain identifier: Arc_Testnet
- Token: USDC
- Tool: Circle App Kit

## Setup

Install dependencies:

npm install

Create a .env file based on .env.example:

PRIVATE_KEY=
RECIPIENT_ADDRESS=

Do not upload your real .env file.

## Run

node --env-file=.env index.js

## Example result

The script returns a transfer result including a transaction hash and Arcscan link.

## Security

Never upload private keys, .env files, or real wallet credentials to GitHub.
Use a dedicated Arc test wallet only.
