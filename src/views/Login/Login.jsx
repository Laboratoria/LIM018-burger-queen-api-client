/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';
import imgBackground from "../../Images/img-login.jpeg";
import './Login.css';
import {postUser} from "../../api_functions/postUser";
import { ErrorModal } from "../../components/Modal/Modal";

export const Login = () => {
   
    const navigate = useNavigate();
    const getToken = localStorage.getItem("token");
    
    useEffect(() => {
        if(getToken){
            navigate("/menu");
        }
    })
   
    // Valor inicial de los inputs ""
    const [data, setData] = useState({
        email : "",
        password : ""
    });

    // Para capturar el error
    const [errorMessage, setErrorMessage] = useState('');
    const [errorModal, setErrorModal] = useState(false);

    function parseJwt (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    
        return JSON.parse(jsonPayload);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.clear();
        const inputEmail = document.getElementById("email").value;
        const inputPassword = document.getElementById("password").value;
        
        if (inputEmail === "" || inputPassword === ""){
            setErrorModal(true)
          
        } else {
            postUser(data).then((resp) => {
                const jwtObject = parseJwt(resp.token);
               
                localStorage.setItem("token", resp.token);
                localStorage.setItem("userId", jwtObject.payload.id);

                if (resp){
                    if (jwtObject.payload.roles.waiter ===  true) {
                        navigate("/menu");
                    } else if (jwtObject.payload.roles.chef ===  true){
                        navigate("/chef")
                    } else {
                        navigate("/admin-users")
                    }
                }
            })
            .catch(err => {
                // alert('usuario no registrado');
                console.log(err)
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
                                id="email"
                                onChange = {(e) => setData({...data, email: e.target.value})}
                            />
                    
                        <label> Contraseña </label>
                            <input  type = "password"
                                className="dataInput"
                                id="password"
                                onChange = {(e) => setData({...data, password: e.target.value})}
                            />
                    
                        <p className="input-error">{errorMessage}</p>
                        <button className="buttonIniciar" type ='submit'>Iniciar sesión</button>
                    </div>
                </form>
            </div>
            <div className="back-blur"></div>
            <ErrorModal
            error= {errorModal} 
            message= "Por favor, complete todos los campos"
            onClose={() => setErrorModal(false)}
            />

        </section>
    )
}








