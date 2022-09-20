const hre = require("hardhat");

async function main() {  
  // Fetch Contract to Deploy
  console.log(`Preparing deployment...\n`)
  const YourName = await hre.ethers.getContractFactory("YourName");
  // Deploy Contract
  const yourName = await YourName.deploy('Satoshi Nakamoto');
  // wait until contract deployed
  await yourName.deployed();
  // Log in console
  console.log("YourName deployed to:", yourName.address);
  console.log(`YourName deployed to: ${yourName.address}`);
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
