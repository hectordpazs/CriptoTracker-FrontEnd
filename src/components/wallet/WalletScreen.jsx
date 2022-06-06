import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadInvestedCoins } from '../../store/actions/coins'
import { getWallet } from '../../store/actions/wallet'
import { MustLogFirst } from '../ui/MustLogFirst'
import { WalletFormInvest } from './WalletFormInvest'
import { WalletInvestedCoins } from './WalletInvestedCoins'

export const WalletScreen = () => {

  const {investedCoins} = useSelector(state => state.wallet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallet());
    dispatch(loadInvestedCoins())
  }, [dispatch]);

  const wallet = useSelector(state => state.wallet);
  
  if (!wallet.logged) {
    return (
      <MustLogFirst/>
    )
  }

    return (
      <>
        <WalletFormInvest/>
        {investedCoins.length > 0 && <WalletInvestedCoins/>}
      </>
      
    )
}
