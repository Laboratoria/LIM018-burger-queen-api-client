import React from "react";
import { useState } from "react"; // Crea estados
import logo from "../img/logo.png"
import "../css/Login.css"
//import {useNavigate} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        if (email === '') {
            return alert('Por favor ingresa tu credencial')
        }
        alert(`El email con el que ingresaste es: ${email} y la contraseña ${password}`)

    }

    return (
        <section className="login">
            <div className="background-logo">
                <img src={logo} alt="burger-queen-logo" className="logo" />
            </div>
            <div className="background-form">
                <h1> Burger queen </h1>
                <form onSubmit={handleSubmit}>
                    <p> Ingresa tus credenciales </p>
                    <input
                        type="text"
                        value={email}
                        placeholder="email@ejemplo.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        value={password}
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)} />
                    <input
                        type="submit"
                        value="Entrar"
                    />
                </form>
            </div>

        </section>
    )
}

export default Login