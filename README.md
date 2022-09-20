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
25. After writing tests and smart contract...
26. Fix configuration of 1_deploy.js, modify it if nesessary
27. Automate entire process with a test script in ./scripts/2_XXX.js
28. Configure the address of the deployed contract test script in ./scripts/2_XXX.js to an external json file, to avoid address update when deployed. 

	// npx hardhat node  // restart the node
	// npx hardhat run --network localhost ./scripts/1_deploy.js
29. Copy the contract address
30. Create a file in ./src/config.json
31. Add json code like this
{
	"31337": {  // hardhat newtwork id by default
		"yourName": {
			"address": "0x5FbDB2315678afecb367f032d93F642f64180aa3"  // paste address generated in 29th step
		}
	}
}
32. add this at the top of ./scripts/2_XXX.js
	//  const config = require("../src/config.json")

33. Write this code to fetch chainId fron ethers and compare it to config.json

	// const {chainId } = await ethers.provider.getNetwork()
	// console.log("Using chainId:", chainId)

34. Now with the retrieved chainId address can be accessed from config.json

	// const yourName = await ethers.getContractAt('YourName', config[chainId].yourName.address)

35. Start react server
	// npm run start
36. Organize project. Change ./src/App.js , to verify it changes, configure simple message
	Delete ./src/logo.svg
	Delete ./src/App.test.js
	Delete ./src/setupTest.js
	Delete ./src/index.css}
	Delete ./src/App.js CONTENT
37. Create a ./src/components folder and move ./src/App.js to ./src/components/App.js
	// mkdir src/components
	// mv src/App.js src/components/App.js 
38. Fix npm run start console errors, to relative folders
39. Create ./src/assets/ folder to store images.svg
40. Download assets, and configure App.scripts with gist
41. Add Hardhat network to metamask
	Network Name: HardHat
	New RPC URL: http://127.0.0.1:8545
	Chain ID = 31337
	Currency Symbol = ETH 
42. Import some accounts from Hardhat with privateKey, npx hardhat node give us.
43. in ./src/app.js file add useEffect import and function like this:

	import { useEffect } from 'react';
	import '../App.css';

	function App() {

	  const loadBlockchainData = async () => {
	    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
	    console.log(accounts[0])
	  }

	  useEffect(() => {
	    loadBlockchainData()
	  })

44. Retrieve information from the contract to console.log()
45. Create compoments folder and move App.js here
46. Create store folder and create reducers.js
47. Create store.js in store folder
48. 
