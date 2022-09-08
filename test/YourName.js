const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('YourName Contract Testing',() =>{
	let yourName, accountDeployer
	beforeEach(async () => {
		//Fetch Contract from blockchain
		const YourName = await ethers.getContractFactory('YourName')
		yourName = await YourName.deploy('Satoshi Nakamoto')
		await yourName.deployed();		

		const accounts = await ethers.getSigners()		
		accountDeployer = accounts[0]
		account1 = accounts[1]
		
	})
	describe('Deployment',() =>{
		it('Compares msg.sender and accountDeployer', async() =>{
			expect(await yourName.connect(accountDeployer).owner()).to.equal(accountDeployer.address)
		})
		it('has the initial correct name accountDeployer', async () =>{				
			expect(await yourName.yourNames(accountDeployer.address)).to.equal('Satoshi Nakamoto')			
		})
		it('has the initial correct name account1', async () =>{				
			expect(await yourName.yourNames(account1.address)).to.equal('')			
		})
	})
	describe('Modifications',() =>{
		
		it('changes yourName accountDeployer', async ()=> {
			await yourName.connect(accountDeployer).setName('Mechitar')
			expect(await yourName.connect(accountDeployer).getName()).to.equal('Mechitar')
		})
		it('changes yourName account1', async ()=> {
			await yourName.connect(account1).setName('Tango')
			expect(await yourName.connect(account1).getName()).to.equal('Tango')
		})
		it('resets yourName accountDeployer', async() =>{
			await yourName.connect(accountDeployer).resetName()
			expect(await yourName.connect(accountDeployer).getName()).to.equal('Satoshi Nakamoto')
		})
		it('resets yourName account1', async() =>{
			await yourName.connect(account1).resetName()
			expect(await yourName.connect(account1).getName()).to.equal('Satoshi Nakamoto')
		})		
		it('changes accountDeployer and verify other', async()=>{	
		    await yourName.connect(accountDeployer).setName('Tango')
		    await yourName.connect(account1).setName('Cash')			
			expect(await yourName.connect(accountDeployer).getName()).to.equal('Tango')
			expect(await yourName.connect(account1).getName()).to.equal('Cash')
		})	
	})
})