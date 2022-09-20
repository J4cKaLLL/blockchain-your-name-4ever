const config = require("../src/config.json")

async function main() {  

// Fetch chainId

const {chainId } = await ethers.provider.getNetwork()
console.log("Using chainId:", chainId)

// Fetch accounts

const yourName = await ethers.getContractAt('YourName', config[chainId].yourName.address)
console.log(`YourName address fetched: ${yourName.address}`)
const accounts = await ethers.getSigners()
deployer = accounts[0]
user = accounts[1]

console.log(`Este es el Deployer: ${deployer.address}`)
console.log(`Este es el User: ${user.address}`)

// Deployer Initial Name verification getName

deployerName = await yourName.connect(deployer).getName()
console.log(`The initial deployer name is: ${deployerName}`)

// Deployer Name change verification

await yourName.connect(deployer).setName('Tanguito')
deployerName = await yourName.connect(deployer).getName()
console.log(`The new name for the deployer is: ${deployerName}`)

// Deployer Name reset verification

await yourName.connect(deployer).resetName()
deployerName = await yourName.connect(deployer).getName()
console.log(`The name for the deployer after reset is: ${deployerName}`)

// initial Deployer name verification

trx = await yourName.connect(deployer).setName('Kaitoz')
result = await trx.wait()
_user = result.events[0].args._user
_yourName = result.events[0].args._yourName
console.log(`user: ${_user}`)
console.log(`yourName: ${_yourName}`)
userName = await yourName.connect(deployer).getName()
console.log(`The name of the deployer after first set is: ${userName}`)

// initial user name verification

trx = await yourName.connect(user).setName('MechitarRyuken')
result = await trx.wait()
_user = result.events[0].args._user
_yourName = result.events[0].args._yourName
console.log(`user: ${_user}`)
console.log(`yourName: ${_yourName}`)
userName = await yourName.connect(user).getName()
console.log(`The name of the user after first set is: ${userName}`)

// user Name reset verification

await yourName.connect(user).resetName()
userName = await yourName.connect(user).getName()
console.log(`The name of user after reset is: ${userName}`)

// user Name set after reset verification

trx = await yourName.connect(user).setName('Kaitoz')
result = await trx.wait()
userName = await yourName.connect(user).getName()
console.log(`The initial name of the user is: ${userName}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
