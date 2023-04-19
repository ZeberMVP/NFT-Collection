require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
    polygon: {
      url: "https://rpc-mumbai.maticvigil.com/v1/413f0dbc1431e2cdb2df00bb4132bf4abc90a05e",
      accounts: [PRIVATE_KEY]
    }
  },
};