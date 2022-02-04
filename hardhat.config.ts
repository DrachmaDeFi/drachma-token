import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig } from "hardhat/config";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  networks: {
    metis: {
      url: process.env["METIS_RPC"] || "https://andromeda.metis.io/?owner=1088",
      accounts: [process.env["PRIVATE_KEY"]],
    },
    stardust: {
      url: process.env["STARDUST_RPC"] || "https://stardust.metis.io/?owner=588",
      accounts: [process.env["PRIVATE_KEY"]],
    },
  },
  etherscan: {
    apiKey: process.env["ETHERSCAN_API_KEY"],
  },
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;