require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "PASTE UR PRIVATE KEY WITHOUT 0X";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x043cffeadb4d0326e24c76845cbc1bfd5ded742727a10b16180aa906a503dbe4`], //your private key
    },
  },
};