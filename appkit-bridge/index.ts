import { AppKit } from "@circle-fin/app-kit";
import { createViemAdapterFromPrivateKey } from "@circle-fin/adapter-viem-v2";
import { inspect } from "util";

const kit = new AppKit();

const bridgeUSDC = async (): Promise<void> => {
  try {
    console.log("Arc App Kit Bridge Demo started");

    const adapter = createViemAdapterFromPrivateKey({
      privateKey: process.env.PRIVATE_KEY as string,
    });

    const result = await kit.bridge({
      from: { adapter, chain: "Ethereum_Sepolia" },
      to: { adapter, chain: "Arc_Testnet" },
      amount: "1.00",
    });

    console.log("Bridge result:");
    console.log(inspect(result, false, null, true));
  } catch (err) {
    console.log("ERROR");
    console.log(inspect(err, false, null, true));
  }
};

void bridgeUSDC();
