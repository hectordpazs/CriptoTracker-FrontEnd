import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

export const WalletFormInvest = () => {

    const [isActive, setIsActive] = useState(false);
    const [dropdownText, setDropdownText] = useState('Click para seleccionar');

    const [values, handleInputChange] = useForm({
        option: '',
        amount: ''
    })

    const { option, amount } = values;

    const availableCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
        "cardano",
    ];

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!availableCoins.includes(dropdownText) || !amount ) {
            Swal.fire({ icon: 'error', title: 'Oops...', text: 'Por favor, llena todos los campos' })
        } else {
            //dispatch(invest(option, amount))
            console.log(dropdownText, amount);
        }
        
    }

    const handleClick = (coin)=>{
        setIsActive(false)
        setDropdownText(coin)
    }

    return (
       
            <div className='container'>
                <div className="row">
                    <div className="col-s12 col-lg-6 login-form-1 m-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="dropdown form-group">
                                <input
                                    onClick={() => setIsActive(!isActive)}
                                    name = {'option'}
                                    className="btn btn-primary dropdown-toggle"
                                    value={dropdownText}
                                    onChange={handleInputChange}
                                />   

                                <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                                    {availableCoins.map((el) => {
                                    return (
                                        <a
                                        key={el}
                                        onClick={() => handleClick(el)}
                                        href="#"
                                        className="dropdown-item"
                                        >
                                        {el}
                                        </a>
                                    );
                                    })}
                                </div>
                            </div>
                            <div>
                                <input 
                                    type="number" 
                                    className="form-control mb-1" 
                                    placeholder="Cantidad en dolares a invertir *"
                                    name="amount"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btnSubmit">Invertir</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
    )
}
