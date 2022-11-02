// import { Component } from "react";
import React, { useState } from 'react';
import { auth } from "../helpers/api";
import { useNavigate } from 'react-router-dom';
import burgerlogo from "../imagens/Burgerqueen.png"

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value)

    if (email === "" || password === "") {
      alert("Por favor, ingresa tus datos");
    } else {
      auth(email, password)
        .then((res) => {
          // console.log("soy el console", res);
          if (res.status === 200) {
            localStorage.setItem('key', res.data.token)
            // eslint-disable-next-line no-unused-vars
            const token = localStorage.getItem('key')
            navigate("/desayunos");
          }
          else if (res.status === 400) {
            console.log("datos incorrectos");
          }
        })
        .catch((err) => {
          // console.log("=>", err);
          console.log("error del catch");
          alert("Los datos ingresados son incorrectos")
        });
    }
  };

  return (
    <>
      <div className='login'>
          <div className='form-container'>
          <img src={burgerlogo} alt='chica barista' className='baristaLogo' />
          {/* <p className='titlelogin'>Iniciar sesión</p> */}
          <form action='/' className='form'>
            <label htmlFor='email' className='label' required>
              Correo electrónico
            </label>
            <input
              type='text'
              id='email'
              placeholder='usuario@gmail.com'
              className='input input-email'
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <label htmlFor='password' className='label' required>
              Constraseña
            </label>
            <input
              type='password'
              id='new-password'
              placeholder='***********'
              className='input input-password'
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
            <button
              className='primary-button login-button'
              onClick={loginSubmit}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
