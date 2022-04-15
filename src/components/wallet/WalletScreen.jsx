import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWallet } from '../../actions/wallet'
import { WalletFormInvest } from './WalletFormInvest'
import { WalletInvestedCoins } from './WalletInvestedCoins'

export const WalletScreen = () => {

  const {investedCoins} = useSelector(state => state.wallet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallet());
  }, [dispatch]);

  const wallet = useSelector(state => state.wallet);

  if (!wallet.logged) {
    //hacer un componente bonito para que no se vea tan feo
    return <div><h1>DEBES LOGGEAR EN LA WALLET PRIMERO</h1></div>
  }

    return (
      <>
        <WalletFormInvest/>
        {investedCoins.length > 0 && <WalletInvestedCoins/>}
      </>
      
    )
}
