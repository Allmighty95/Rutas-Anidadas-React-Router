// src/components/Login.jsx
import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir a otras rutas.
import styles from '../styles/Login.module.css'; // Importa el archivo CSS Module

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState(''); // Estado para almacenar el nombre de usuario ingresado.
  const navigate = useNavigate(); // Hook para programar la navegación a otras rutas.

  // Función que maneja el evento de inicio de sesión.
  const handleLogin = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página).
    setIsAuthenticated(true); // Cambia el estado de autenticación a verdadero.
    navigate('/dashboard'); // Redirige al usuario a la ruta del Dashboard después de iniciar sesión.
  };

  return (
    <div className={styles.container}> {/* Contenedor principal del componente Login */}
      <h1>Login</h1> {/* Título de la página de inicio de sesión */}
      <form onSubmit={handleLogin}> {/* Formulario que llama a handleLogin al enviarse */}
        <input 
          type="text" 
          value={username} // Valor del input es el estado username
          onChange={(e) => setUsername(e.target.value)} // Actualiza el estado username al cambiar el input
          placeholder="Enter your username" // Texto que aparece cuando el campo está vacío
        />
        <button type="submit">Login</button> {/* Botón para enviar el formulario */}
      </form>
    </div>
  );
}

export default Login; // Exporta el componente Login para que pueda ser utilizado en otras partes de la aplicación.