import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import logoImg from '../img/KARIO_LOGO.png';
import axios from "axios";
import {useHistory} from "react-router-dom"


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
          case "UsuarioRegular":
            history.push("/login");
            break;
          default:
            history.push("/Home");
            break;
        }
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      setError("Error interno del servidor");
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
        <h1>Bienvenido</h1>
        <p>Por favor, inicia sesión para acceder al panel.</p>
        <div>
        <div className="input-container">
            <label htmlFor="username">Usuario:</label>
            <input  id="username" name="username" type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
        </div>
        </div>
        <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
        {error && (
          <div>
            <p className="login-error">{error}</p>
          </div>
        )}
        <p className="small-text">
          ¿Olvidaste tu contraseña? <a href="#">Recupérala aquí</a>
        </p>
      </div>
    </div>
    </form>
  );
}

export default Home;
