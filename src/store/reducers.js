export const provider = (state = {}, action) => {
	switch (action.type) {
		case 'PROVIDER_LOADED':
			return {
				...state,
				connection: action.connection
			}
		case 'NETWORK_LOADED':
			return {
				...state,
				chainId: action.chainId
			}
		case 'ACCOUNT_LOADED':
			return {
				...state,
				account: action.account
		}
		default: 
			return state
	}
}

export const instance = (state = {loaded: false, contract: null}, action) => {
	switch (action.type) {
		case 'INSTANCE_LOADED':
			return {
				...state,
				loaded: true,
				contract: action.YourName,
				symbol: action.symbol,
			}		
		default: 
			return state
	}
}