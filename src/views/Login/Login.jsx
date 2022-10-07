/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';
import imgBackground from "../../Images/img-login.jpeg";
import './Login.css';

export const Login = () => {
    const API_URL= "http://localhost:3001";
    const authPath = "/auth"; 

    const navigate = useNavigate();

    const [data, setData] = useState({
        email : '',
        password : ''
    });

   const handleSubmit = (e) => {
        e.preventDefault();
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
            .catch(err => console.log(err, "el error"))
        }
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
                        <input type = "email"
                            className="dataInput"
                            id="email"
                            onChange = {(e) => setData({...data, email: e.target.value})
                            }
                        />
                    </label>
                    
                    <label> Contraseña 
                        <input  type = "password"
                            className="dataInput"
                            id="password"
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








