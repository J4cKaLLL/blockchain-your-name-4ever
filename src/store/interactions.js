import { ethers } from 'ethers';
import YOURNAME_ABI from '../abis/YourName.json';

export const loadProvider = (dispatch) => {
	const connection = new ethers.providers.Web3Provider(window.ethereum)
    dispatch({ type: 'PROVIDER_LOADED', connection})

    return connection
}

export const loadNetwork = async (provider, dispatch) => {
	const { chainId } = await provider.getNetwork()
    dispatch({ type: 'NETWORK_LOADED', chainId})

    return chainId
}

export const loadAccount = async (provider, dispatch) => {
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})  
	const account = ethers.utils.getAddress(accounts[0])
	dispatch({ type: 'ACCOUNT_LOADED', account})

	let balance = await provider.getBalance(account)
	balance = ethers.utils.formatEther(balance)
	dispatch({ type: 'ETHER_BALANCE_LOADED', balance})

	return account
}

export const loadInstance = async (provider, address, dispatch) => {
	
	const instance = new ethers.Contract(address, YOURNAME_ABI, provider) 
    const symbol = await instance.symbol()  
    dispatch({ type: 'INSTANCE_LOADED', instance, symbol}) 

	return instance
}