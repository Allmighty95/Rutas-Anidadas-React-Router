// src/components/Contact.jsx
import React from 'react'; // Importa React para poder utilizar JSX y crear componentes.
import styles from '../styles/Contact.module.css'; // Importa el archivo CSS Module

function Contact() {
  return (
    <div className={styles.container}> {/* Contenedor principal del componente Contact */}
      <h1>Contact</h1> {/* Título de la página de contacto */}
      <p>Feel free to reach out to us via this page.</p> {/* Mensaje que invita a los usuarios a ponerse en contacto */}
    </div>
  );
}

export default Contact; // Exporta el componente Contact para que pueda ser utilizado en otras partes de la aplicación.