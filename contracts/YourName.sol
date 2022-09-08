// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract YourName {
	
	address public owner;	
	mapping (address => string) public yourNames;

	constructor (string memory _yourName) {
		yourNames[msg.sender] = _yourName;	
		owner = msg.sender;
	}		

	function setName(string memory _yourName) public {
		yourNames[msg.sender]= _yourName;
	}

	function getName() public view returns (string memory) {
		return yourNames[msg.sender];
	}

	function resetName() public {
		yourNames[msg.sender] = "Satoshi Nakamoto";
	}
	
}
