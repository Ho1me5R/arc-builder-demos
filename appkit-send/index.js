const { AppKit } = require("@circle-fin/app-kit");
const { createViemAdapterFromPrivateKey } = require("@circle-fin/adapter-viem-v2");
const { inspect } = require("node:util");

console.log("Arc App Kit Send Demo started");

const kit = new AppKit();

async function sendTokens() {
  console.log("private key loaded:", !!process.env.PRIVATE_KEY);
  console.log("recipient loaded:", !!process.env.RECIPIENT_ADDRESS);

  const adapter = createViemAdapterFromPrivateKey({
    privateKey: process.env.PRIVATE_KEY,
  });

  const sendParams = {
    from: {
      adapter,
      chain: "Arc_Testnet",
    },
    to: process.env.RECIPIENT_ADDRESS,
    amount: "1.00",
    token: "USDC",
  };

  console.log("Sending 1.00 USDC on Arc Testnet...");

  const result = await kit.send(sendParams);

  console.log("Transfer result:");
  console.log(inspect(result, false, null, true));
}

sendTokens().catch((err) => {
  console.error("ERROR:", err);
});
