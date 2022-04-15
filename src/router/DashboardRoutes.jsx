import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate, Route, Routes} from 'react-router-dom'
import { getWallet } from '../actions/wallet';
import { Navbar } from '../components/ui/Navbar';
import { WalletLoginScreen } from '../components/wallet/WalletLoginScreen';
import { WalletScreen } from '../components/wallet/WalletScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
                    <WalletScreen/>
                  }
                />
            </Routes>
        </div>
    </>
  )
}
