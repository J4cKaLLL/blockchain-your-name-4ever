// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract SaveYourName {
	string public yourName;
	address public contractAddress;
	address public payer;	

	constructor () {
		yourName = "Satoshi Nakamoto";
		contractAddress = address(this);
		payer = msg.sender;
	}		

	function setName(string memory _yourName) public {
		yourName = _yourName;
	}

	function getName() public view returns (string memory) {
		return yourName;
	}

	function resetName() public {
		yourName = "Satoshi Nakamoto";
	}
	
}
