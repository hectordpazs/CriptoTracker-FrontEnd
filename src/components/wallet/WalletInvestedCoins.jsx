import React, { useEffect } from 'react'
import './walletInvested.css'

export const WalletInvestedCoins = () => {

    useEffect(() => {
        //dentro del efecto va a ir la logica que se va a ejecutar
        //cuando se renderice el componente
        //dispatch para que se ejecute el action LoadInvestedCoins
        //dispatch(LoadInvestedCoins())
        //cada vez que se ejecute el componente se va a ejecutar el dispatch
    }, [])

    return (
        <div className='container investContainer'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Sus inversiones</h1>
                    <hr />
                    

                </div>
            </div>
        </div>
    )
}
