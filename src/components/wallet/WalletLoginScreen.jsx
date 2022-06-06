import React from 'react'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { startWalletLogin, startWalletRegister } from '../../store/actions/wallet';
import { useNavigate } from 'react-router-dom';


export const WalletLoginScreen = () => {

    const navigate = useNavigate();

    const [values, handleInputChange]  = useForm({
        walletPassword: '',
    });

    const {walletPassword} = values;

    const [registerValues, handleRegisterChange]  = useForm({
        registerPassword: '',
        registerPassword2: ''
    });

    const {registerPassword, registerPassword2} = registerValues;

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startWalletLogin(walletPassword));
        navigate('/wallet');
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startWalletRegister(registerPassword));
            navigate('/wallet');
        }
    }

    const isFormValid = ()=>{

        if (registerPassword !== registerPassword2 || registerPassword.length < 5){
            Swal.fire('Error', 'Las contraseñas no son iguales o es menor a 5 caracteres','error');
            return false;
        }

        return true;
    }

    return (

        <div className="container login-container">
            <div className="row">
                
                <div className="col-lg-6 login-form-2 mt-0">
                    <h3>Registrar Wallet</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Your Password *" 
                                name='registerPassword'
                                onChange={handleRegisterChange}
                            />
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Your Password *" 
                                name='registerPassword2'
                                onChange={handleRegisterChange}
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Register" />
                        </div>
                    </form>
                </div>

                <div className="col-lg-6 login-form-1 mt-0">
                    <h3>Iniciar Sesion</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Your Password *"
                                name='walletPassword'
                                onChange={handleInputChange}
                            />
                             <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                        </div>
                    </form>
                </div>

                            
            </div>
        </div>
    )
}
