import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/",
    //   accounts: [`0x`]
    // }
  }
};

export default config;
