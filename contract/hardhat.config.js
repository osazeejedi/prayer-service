require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{ version: "0.8.17", settings: {
      optimizer: {
        runs: 200,
        enabled: true
      }
    } }, { version: "0.6.12"}],
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/GIMKYIgYMfhGKJjVI0otSecnHwNxlkgv",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "2WBFJKR7ZS2Q85YDWPDH4RFERS4Y4YXCJH"
  }

};
