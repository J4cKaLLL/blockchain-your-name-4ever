// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract YourName {
	
	address public owner;
	address public contractAddress;	
	string public symbol = "MetalUpYourAzz";	
	mapping (address => string) public yourNames;
	mapping (address => bool) public stateName;
	event SetName(address indexed _user, string _yourName);
	
	constructor (string memory _yourName) {
		owner = msg.sender;
		yourNames[owner] = _yourName;
		stateName[owner] = true;		
		contractAddress = address(this);		
	}		

	function setName(string memory _yourName) public returns(bool success){
		yourNames[msg.sender]= _yourName;		
		stateName[msg.sender] = true;
		emit SetName(msg.sender, yourNames[msg.sender]);
		return true;
	}

	function getName() public view returns (string memory) {
		//console.log(stateName[msg.sender]);
		require(stateName[msg.sender]);
		return yourNames[msg.sender];
	}

	function resetName() public {
		yourNames[msg.sender] = "Satoshi Nakamoto";
		stateName[msg.sender] = true;
	}
	
}
