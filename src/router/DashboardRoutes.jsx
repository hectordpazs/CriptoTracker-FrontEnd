import React from 'react';
import { Route, Routes} from 'react-router-dom'
import CoinDetailPage from '../components/coins/CoinDetailPage';
import { Coins } from '../components/coins/Coins';
import { Navbar } from '../components/ui/Navbar';
import { WalletLoginScreen } from '../components/wallet/WalletLoginScreen';
import { WalletScreen } from '../components/wallet/WalletScreen';


export const DashboardRoutes = () => {

  return (
    <>
        <Navbar/>
        <div>
            <Routes>
                <Route 
                  path='/walletLogin' 
                  element={
                    
                    <WalletLoginScreen/>
                    
                  }
                />
                <Route 
                  path='/*' 
                  element={
                    <Coins/>
                  }
                />
                <Route 
                  path='/coins/:id' 
                  element={
                    <CoinDetailPage/>
                  }
                />
                <Route
                  path='/wallet'
                  element={
                    <WalletScreen/>
                  }
                />
            </Routes>
        </div>
    </>
  )
}
