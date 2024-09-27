// src/components/Settings.jsx
import React from 'react'; // Importa React para poder utilizar JSX y crear componentes.
import styles from '../styles/Settings.module.css'; // Importa el archivo CSS Module
function Settings() {
  return (
    <div className={styles.container}> {/* Contenedor principal del componente Settings */}
      <h2>Settings</h2> {/* Título de la página de configuración */}
      <p>This is the settings page.</p> {/* Descripción de la página de configuración */}
    </div>
  );
}

export default Settings; // Exporta el componente Settings para que pueda ser utilizado en otras partes de la aplicación.