const hre = require("hardhat");

async function main() {  
  // Fetch Contract to Deploy
  const SaveYourName = await hre.ethers.getContractFactory("SaveYourName");
  // Deploy Contract
  const saveYourName = await SaveYourName.deploy();
  // wait until contract deployed
  await saveYourName.deployed();
  // Log in console
  console.log("saveYourName deployed to:", saveYourName.address);
  console.log(`saveYourName deployed to :${saveYourName.address}`);
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
