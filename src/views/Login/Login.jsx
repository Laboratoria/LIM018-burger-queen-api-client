/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';
import imgBackground from "../../Images/img-login.jpeg";
import './Login.css';
import postUser from "../../api_functions/postUser";

export const Login = () => {
    const navigate = useNavigate();
   
    // Valor inicial de los inputs ""
    const [data, setData] = useState({
        email : "",
        password : ""

    });

    // Para capturar el error
    const [errorMessage, setErrorMessage] = useState('');

    /* const emailRef = useRef(null);
    const passwordRef = useRef(null); */

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        const inputEmail = document.getElementById("email").value;
        const inputPassword = document.getElementById("password").value;

        if (inputEmail === "" || inputPassword === ""){
            alert('Complete todos los campos');
        } else {
            postUser(data).then((resp) => {
                // console.log(resp);
                localStorage.setItem("token", resp.token)
                if (resp) {
                    navigate("/menu");
                }
            })
            .catch(err => {
                // alert('usuario no registrado');
                setErrorMessage('Usuario no registrado, revise su correo o contraseña');
                setTimeout(()=>{
                    setErrorMessage('');
                }, 4000);
            });                           
        }
    }

    
return (
    <section className="login">
        <div className="content-login">
            <div className="brand">
                <h1>BURGER QUEEN</h1>
                <img src= {imgBackground} className= "img-background"/>
            </div>

            <form className="content-form" onSubmit={handleSubmit}>
                <picture>
                    <img src = {logo} className = "logo"/>
                </picture>

                <div className="bienvenido">¡BIENVENIDO(A)!</div>
                <div className="form1">
                    <label> Usuario </label>
                        <input type = "email"
                            className="dataInput"
                            /* ref={emailRef} // hook para limpiar input */
                            id="email"
                            onChange = {(e) => setData({...data, email: e.target.value})}
                        />
                  
                    <label> Contraseña </label>
                        <input  type = "password"
                            className="dataInput"
                            /* ref={passwordRef} // hook para limpiar input */
                            id="password"
                            onChange = {(e) => setData({...data, password: e.target.value})}
                        />
                  
                    <p className="input-error">{errorMessage}</p>
                    <button className="buttonIniciar" type ='submit'>Iniciar sesión</button>
                </div>
            </form>
        </div>
        <div className="back-blur"></div>

    </section>
)
}








