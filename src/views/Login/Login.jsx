/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';
import imgBackground from "../../Images/img-login.jpeg";
import './Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const API_URL= "http://localhost:3001";
    const authPath = "/auth"; 

    const [data, setData] = useState({
        email : "",
        password : ""
    });

    const [errorMessage, setErrorMessage] = useState('');

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        const inputEmail = document.getElementById("email").value;
        const inputPassword = document.getElementById("password").value;

        if (inputEmail === "" || inputPassword === ""){
            alert('Complete todos los campos');
        } else {
            console.log(data)
            fetch(`${API_URL}${authPath}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    navigate('/menu');
                }
                return res.json() 
            })
            .then((resp) => {
                console.log(resp.token);
                localStorage.setItem("token", resp.token)
            })
            .catch(err => {
                // alert('usuario no registrado');
                console.log(err, "el error");
                setErrorMessage('Usuario no registrado, revise su correo o contraseña');
                setTimeout(()=>{
                    setErrorMessage('');
                }, 4000);
                

            });
            setTimeout(()=>{
                e.target.reset()
            }, 4000)                
        }
    }

    
return (
    <section className="login">
        <div className="content-login">
            <div className="brand">
                <h1>BURGER QUEEN</h1>
                <img src= { imgBackground } className= "img-background"/>
            </div>

            <form className="content-form" onSubmit={handleSubmit}>
                <picture>
                    <img src = { logo } className = "logo"/>
                </picture>

                <div className="bienvenido">¡BIENVENIDO(A)!</div>
                <div className="form1">
                    <label> Usuario </label>
                        <input type = "email"
                            className="dataInput"
                            ref={emailRef}
                            id="email"
                            onChange = {(e) => setData({...data, email: e.target.value})}
                        />
                  
                    <label> Contraseña   </label>
                        <input  type = "password"
                            className="dataInput"
                            ref={passwordRef}
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








