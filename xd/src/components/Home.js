import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import logoImg from '../img/KARIO_LOGO.png';
import axios from "axios";
import {useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';


function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  //EStados para contraseña email y token 
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8005/api/login",
        {
          email: email,
          contraseña: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "kario-api-token-jwt": "",
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        const tokenapi = data;
        const token = tokenapi.token;
        const foto = tokenapi.usuario.foto
        const nombre = tokenapi.usuario.nombre
        const rol = tokenapi.usuario.rol;
        const id = tokenapi.usuario._id;
        setToken(tokenapi);
        localStorage.setItem("rol", rol);
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("token", token);
        localStorage.setItem("Usuario", id);
        localStorage.setItem("foto", foto);
        switch (rol) {
          case "Usuario regular":
            history.push("/login");
            break;
          case "Usuario administrador":
              history.push("/login");
              break;
          default:
            history.push("/Home");
            break;
        }
      } 
      else {
        setError(response.data.msg)
      }
    } catch (error) {
      if(error.response){
        setError(error.response.data.msg);
      }
      else{
      setError("Erro al iniciar sesion");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowForm(true);
      }, 100); 
    }
  }, [isLoading]);

  return (
      <form onSubmit={handleSubmit}>
      <div className={`contenedor ${showForm ? 'form-show' : ''}`}>
        <div className="overlay"></div>
        <div className="logotipo-container">
          <div className={`logotipo ${isLoading ? 'logo-loading' : ''}`} id="logo">
            <img src={logoImg} alt="Logo" />
          </div>
        </div>
        <div className={`formulario ${showForm ? 'form-show' : ''}`}>
          <div className="logo-form">
            <img src={logoImg} alt="Logo del formulario" />
          </div>
          <h1>Bienvenido al panel digital de</h1>
          <h2> KARIO media</h2>
          <p>Por favor, ingrese los siguientes datos para ingresar la plataforma.</p>
          <div>
          <div className="input-container">
              <label htmlFor="username">  </label>
              <input  id="username" name="username" type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Usuario'
                required/>
          </div>
          <div className="input-container">
            <label htmlFor="password"></label>
            <input type="password" id="password" name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Contraseña'
                required />
          </div>
          </div>
          <button type="submit" className="login-button">
                Ingresar al panel 
              </button>
          {error && (
            <div>
              <p className="login-error">{error}</p>
            </div>
          )}
          <p className="small-text">
             <Link to = '/recuperar'>Tienes problemas para ingresar? Por favor conectarse con asistencia técnica lo más pronto posible.</Link>
          </p>
        </div>
      </div>
      </form>
  );
}

export default Home;
