/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import logo from '../../Images/logo.png'
import imgBackground from "../../Images/img-login.jpeg"
import './Login.css'

export const Login = () => {
    const [data, setState] = useState({
        email : '',
        password : ''
    });

   const handleSubmit = () => {
    alert(`Bienvenido(a) ${data.email}`)
   }

return (
    <section className="login">
        <div className="content-waiter1">
            <div className="brand">
                <h1>BURGER QUEEN</h1>
                <img src= { imgBackground } className= "img-background"/>
            </div>

            <div className="content-form">
                <picture>
                    <img src = { logo } className = "logo"/>
                </picture>

                <div>¡BIENVENIDO(A)!</div>
                <form className="form1" onSubmit = {handleSubmit}>
                    <label> Usuario 
                        <input className="dataInput"
                            type = "email"
                            value = {data.email}
                            onChange = {(e) => setState(e.target.value)}
                        />
                    </label>
                    
                    <label> Contraseña 
                        <input className="dataInput"
                            type = "password"
                            value = {data.password}
                            onChange = {(e) => {
                                setState(e.target.value)
                            } }
                                
                        />
                    </label>
                    
                    <button className="buttonIniciar" type = 'submit'> Iniciar sesión </button>
                </form>
            </div>
        </div>
        <div className="back-blur"></div>

    </section>
)
}








