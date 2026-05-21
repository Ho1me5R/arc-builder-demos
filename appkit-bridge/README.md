# Arc App Kit Bridge Demo

A simple demo for bridging USDC from Ethereum Sepolia to Arc Testnet using Circle App Kit.

## What this demo does

This script bridges USDC from Ethereum Sepolia to Arc Testnet.

## Network

- Source: Ethereum Sepolia
- Destination: Arc Testnet
- Token: USDC
- Amount: 1.00
- Tool: Circle App Kit

## Setup

Install dependencies:

npm install

Create a .env file based on .env.example:

PRIVATE_KEY=

Do not upload your real .env file.

## Run

npx tsx --env-file=.env index.ts

## Requirements

The sending wallet needs:

- Sepolia ETH for gas
- Sepolia USDC for bridging

## Example result

The script returns a bridge result with success status and transaction data.

## Security

Never upload private keys, .env files, or real wallet credentials to GitHub.
Use a dedicated test wallet only.
