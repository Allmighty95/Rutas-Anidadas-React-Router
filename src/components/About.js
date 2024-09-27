// src/components/About.jsx
import React from 'react'; // Importa React para poder utilizar JSX y crear componentes.
import styles from '../styles/About.module.css'; // Importa el archivo CSS Module

function About() {
  return (
    <div className={styles.container}> {/* Contenedor principal del componente About */}
      <h1>About</h1> {/* Título de la página About */}
      <p>This is the About page. Learn more about us here.</p> {/* Descripción de la página About */}
    </div>
  );
}

export default About; // Exporta el componente About para que pueda ser utilizado en otras partes de la aplicación.