const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('YourName Contract Testing',() =>{	
	
	let yourName, accountDeployer, setName0, setName1, result0, result1
	beforeEach(async () => {
		//Fetch Contract from blockchain
		const YourName = await ethers.getContractFactory('YourName')
		yourName = await YourName.deploy('Satoshi Nakamoto')
		await yourName.deployed();		
		
		const accounts = await ethers.getSigners()		
		accountDeployer = accounts[0]
		account1 = accounts[1]	
		account2 = accounts[1]		
	})

	describe('Deployment',() =>{
		it('Compares the address of the deployed contract', async()=>{			
			expect(await yourName.contractAddress()).to.equal(yourName.address)
		})
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
	
	describe('SetName',() =>{
		describe('Success', () =>{
			beforeEach(async () => {
				setName0 = await yourName.connect(accountDeployer).setName('Tango')
			    result0 = await setName0.wait()
			    
			    setName1 = await yourName.connect(account1).setName('Cash')
			    result1 = await setName1.wait()					
			})
			it('get name for accountDeployer', async ()=> {			
				expect(await yourName.connect(accountDeployer).getName()).to.equal('Tango')
			})
			it('get name for account1', async ()=> {			
				expect(await yourName.connect(account1).getName()).to.equal('Cash')
			})
			it('Emits a SetName event name', async() =>{
				const event = result0.events[0]			
				expect(event.event).to.equal('SetName')			
			})
			it('Emits a SetName event address', async() =>{
				const event = result0.events[0]	
				const args = event.args
				expect(args[0]).to.equal(accountDeployer.address)
			})
			it('Emits a GetName event address', async() =>{
				const event = result0.events[0]	
				const args = event.args
				expect(args[0]).to.equal(accountDeployer.address)
			})
		})
		describe('Failure', () =>{
			it('yourName is not initialized', async()=>{				
				await expect(yourName.connect(account1).getName()).to.be.reverted
			})
		})
	})
	describe('ResetName',() =>{	
		describe('Success', () =>{
			it('resets yourName accountDeployer', async() =>{
				await yourName.connect(accountDeployer).resetName()
				expect(await yourName.connect(accountDeployer).getName()).to.equal('Satoshi Nakamoto')
			})
			it('resets yourName account1', async() =>{
				await yourName.connect(account1).resetName()
				expect(await yourName.connect(account1).getName()).to.equal('Satoshi Nakamoto')
			})
		})	
	})
		
})