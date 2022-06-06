import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import './walletInvested.css'


export const WalletInvestedCoins = () => {

    let {investedCoins} = useSelector(state => state.wallet)
    const coinName = investedCoins.map(coin => coin.name)
    const [price, setPrice] = useState([])
    let priceArray = []

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinName.map(coin=> coin).join(',')}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                priceArray.push({...investedCoins[i], price: data[i].current_price})
            }
        })
        .then(() => setPrice(priceArray))
        
    }, [])

    return (
        
        <div className='container investContainer bg-dark'>
            <div className='row'>
                <div className='col-12'>

                    {investedCoins.length > 0 ? (
                        

                        <table className='table caption-top text-white'>
                            <caption><h1 className='text-center text-white'>Sus Inversiones</h1></caption>
                            <thead>
                                <tr>
                                    <th scope='col'>Moneda</th>
                                    <th scope='col'>Saldo</th>
                                    <th scope='col'>Precio de la moneda en USD</th>
                                    <th scope='col'>Cantidad de moneda que posees</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                
                                price.filter(coin => coin._id!==undefined).map(coin => (

                                    <tr key={coin._id}>
                                        <td className='text-capitalize'>{coin.name}</td>
                                        <td>{(coin.cantidad_moneda*coin.price).toFixed(2)}</td>
                                        <td>{coin.price}</td>
                                        <td>{coin.cantidad_moneda.toFixed(4)}</td>
                                    </tr>
                                
                                ))
                                
                                }

                            </tbody>
                        </table>
                    ) : (   <div className='alert alert-info'>
                                <p>No tiene ninguna inversión</p>
                            </div>)
                    }
                    

                </div>
            </div>
        </div>
    )
}
