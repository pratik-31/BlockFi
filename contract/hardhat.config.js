require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// FOR DEPLOYING LOCALLY
// module.exports = {
//   solidity: "0.8.18",
// };

// DEPLOYING TO TEST NETWORKS LINK(Polygon, Sepolia)
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
const NEXT_PUBLIC_SEPOLIA_RPC =
  "https://powerful-alien-county.ethereum-sepolia.quiknode.pro/eeca007a60400b620f90f1359e3e109503f98a71/"; // Replace with your Infura project ID or other Sepolia RPC URL
const NEXT_PUBLIC_PRIVATE_KEY =
  "f507229a9766d797ca49642b52f1b56100b482073c421135ff14ec95b3723698";

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
    sepolia: {
      url: NEXT_PUBLIC_SEPOLIA_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
