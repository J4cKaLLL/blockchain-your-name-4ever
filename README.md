# Sample Hardhat Project

CREATE DAPP FROM SCRATCH

1. Install dependencies
2. Create npx react app from scratch, Locate root directory, lowercase separate by "-" i.e.:
	// npx create-react-app blockchain-your-name-4ever --use-npm
3. Open Editor with
	// subl .
4. Start react app with npm to verify
	// npm start
5. Copy package.json from D.U. to my package.json project
6. Install configured dependencies in package.json with:
	// npm install
7. Delete README.MD
8. Create Hardhat empty project
	// npx hardhat
9. Selects Create a Javascript project option
	// Hardhat Project root: "Enter"
	// Add .gitignore: "y"
10. Replace README.MD with whis file
11. Create a .env file in project root
12. Add “require("dotenv").config();” to hardhat.config.js
13. Github Config, https://github.com/J4cKaLLL, Create new repository i.e , then
	// git init
	// git remote add origin https://github.com/J4cKaLLL/blockchain-your-name-4ever.git
	// git add .
	// git commit -m"1. Configuration"
	// git push -u origin master
	// git branch developer 
	// git checkout developer
	// git pull
	// git push origin developer 
	// git checkout master
	// git merge developer
	// git push origin master
	// git checkout developer
14. Open console, Run hardhat node
	// npx hardhat node
15. Create contract.sol then i.e.:
16. Configure networks in hardhat.config.js to use hardhat network by adding:	
	module.exports = {
		solidity: "0.8.9",
		networks: {
			localhost: {}
		},
	}
17. Modify scripts/ names with 1_Name.js etc.
18. In Scripts/1_Name.js:
	// Fetch contract to deploy
	// Deploy Contract
	// Wait until deployed
	// log
19. Intantiate contract in console to test contract
	// npx hardhat node 
	// npx hardhat compile 
	// npx hardhat run --network localhost ./scripts/1_deploy.js 
	// npx hardhat console --network localhost 

	// const YourName = await ethers.getContractFactory(“YourName”)	
	// const YourNames = await SaveYourName.attach("0x0165878A594ca255338adfa4d48449f69242Eb8F")
	or
	// const YourNames = await ethers.getContractAt(“YourName”, "0x0165878A594ca255338adfa4d48449f69242Eb8F")
20. Contract can he used like this:	
	// await YourNames.yourName()
	// await YourNames.contractAddress()
	// await YourNames.payer()
	// await YourNames.setName("Eder")
21. Get hardhat localhost server addresses
	// const accounts = await ethers.getSigners()
	// accounts[0].address
21. Get hardhat addess balance
	// const balance = await ethers.provider.getBalance(accounts[0].address)
	// ethers.utils.formatEther(balance.toString())
22. Exit console
	// .exit
23. Create test.js
24. To run a test from console
	// npx hardhat test
