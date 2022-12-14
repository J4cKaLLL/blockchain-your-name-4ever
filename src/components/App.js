import { useEffect } from 'react';
import {useDispatch } from 'react-redux';

import config from '../config.json';

import { 
  loadProvider, 
  loadNetwork, 
  loadAccount,
  loadInstance
} from '../store/interactions';


import Navbar from './Navbar';


function App () {

  const dispatch = useDispatch()

  const loadBlockchainData = async () => {
    
    const provider = loadProvider(dispatch)
    const chainId = await loadNetwork(provider, dispatch) 

    // Reload page when network changes
    window.ethereum.on('chainChanged', () => {
      window.location.reload()
    })  


    // Fetch current account & balance from Metamask when changed
    window.ethereum.on('accountsChanged', () => {
      loadAccount(provider, dispatch)
    })      
    
    await loadInstance(provider, config[chainId].yourName.address, dispatch)

  }

  useEffect(() => {
    loadBlockchainData()
  })

  return (
    <div>
          
      <Navbar></Navbar>

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          {/* Markets */}

          {/* Balance */}

          {/* Order */}

        </section>
        <section className='exchange__section--right grid'>

          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}

        </section>
      </main>

      {/* Alert */}

    </div>
  );
}

export default App;