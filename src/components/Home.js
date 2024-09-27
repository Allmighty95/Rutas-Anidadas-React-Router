// src/components/Home.jsx
import React from 'react'; // Importa React para poder utilizar JSX y crear componentes.
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}> {/* Contenedor principal del componente Home */}
      <h1>Home</h1> {/* Título de la página de inicio */}
      <p>Welcome to the Home page!</p> {/* Mensaje de bienvenida en la página de inicio */}
    </div>
  );
}

export default Home; // Exporta el componente Home para que pueda ser utilizado en otras partes de la aplicación.