/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import logo from '../../Images/logo.png'
import imgBackground from "../../Images/img-login.jpeg"
import './Login.css'

import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email : '',
        password : ''
    });

   const handleSubmit = () => {
    alert(`Bienvenido(a) ${data.email}`)
    navigate("/menu");
   }

return (
    <section className="login">
        <div className="content-login">
            <div className="brand">
                <h1>BURGER QUEEN</h1>
                <img src= { imgBackground } className= "img-background"/>
            </div>

            <form className="content-form">
                <picture>
                    <img src = { logo } className = "logo"/>
                </picture>

                <div className="bienvenido">¡BIENVENIDO(A)!</div>
                <div className="form1">
                    <label> Usuario 
                        <input className="dataInput"
                            type = "email"
                            onChange = {(e) => setData({...data, email: e.target.value})
                            }
                        />
                    </label>
                    
                    <label> Contraseña 
                        <input className="dataInput"
                            type = "password"
                            onChange = {(e) => setData({...data, password: e.target.value})}
                        />
                    </label>
                    
                    <button className="buttonIniciar" type ='submit' onClick= {handleSubmit}>Iniciar sesión</button>
                </div>
            </form>
        </div>
        <div className="back-blur"></div>

    </section>
)
}








