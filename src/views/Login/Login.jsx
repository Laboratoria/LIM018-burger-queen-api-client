/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import logo from '../../Images/logo.png'
import './Login.css'

export const Login = () => {
    const [data, setName] = useState({
        email : '',
        password : ''
    });

   const handleSubmit = (event) => {
    event.prevenDefault();
    alert(`Bienvenido(a) ${data.email}`)
   }

return (
    <section className="login">
        <div className="brand">
            <h1>BURGER QUEEN</h1>
        </div>

        <div className="content-form">
            <img src = { logo } className = "logo"/>
            <div>¡BIENVENIDO(A)!</div>
            <form onSubmit = {handleSubmit}>
                <label> Usuario
                    <input
                        type = "email"
                        value = {data.email}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </label>

                <label> Contraseña
                    <input
                        type = "password"
                        value = {data.password}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </label>
                <button type = 'submit'> Iniciar sesión </button>
            </form>
        </div>

    </section>
)
}








