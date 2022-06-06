import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../store/actions/auth';
import validator from 'validator';
import Swal from 'sweetalert2';
import './login.css';

export const LoginScreen = () => {

    const [loginValues, handleLoginInputChange] = useForm({
        lEmail: '',
        lPassword: ''
    })

    const {lEmail, lPassword} = loginValues;

    const [registerValues, handleRegisterInputChange] = useForm({
        rName: '',
        rEmail: '',
        rPassword: '',
        rPassword2: ''
    })

    const {rName, rEmail, rPassword, rPassword2} = registerValues;

    const dispatch = useDispatch();

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword))
        
    }

    const handleRegister = (e)=>{
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegister(rName,rEmail,rPassword))
        }

    }

    const isFormValid = ()=>{

        if(rName.trim().length===0){
            Swal.fire('Error', 'el nombre no debe estar vacio','error');
            return false;
        }else if ( !validator.isEmail(rEmail) ){
            Swal.fire('Error','Agrega un Email Valido','error');
            return false;
        }else if (rPassword !== rPassword2 || rPassword.length < 5){
            Swal.fire('Error', 'Las contraseñas no son iguales o es menor a 5 caracteres','error');
            return false;
        }

        return true;
    }

    return (
        <div className="container login-container">
            <div className='mb-5'>
                <h1 className='text-center mt-0 title'>CRIPTOTRACKER</h1>
            </div>
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="lEmail"
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="lPassword"
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login" 
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 login-form-2">
                        <h3>Registro</h3>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="rName"
                                    onChange={handleRegisterInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="rEmail"
                                    onChange={handleRegisterInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña" 
                                    name="rPassword"
                                    onChange={handleRegisterInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña" 
                                    name="rPassword2"
                                    onChange={handleRegisterInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear cuenta" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}
