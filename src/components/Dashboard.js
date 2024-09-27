// src/components/Dashboard.jsx
import React from 'react'; // Importa React para poder utilizar JSX y componentes.
import { Outlet, Link } from 'react-router-dom'; // Outlet renderiza rutas anidadas y Link permite la navegación entre rutas.
import styles from '../styles/Dashboard.module.css'; // Importa el archivo CSS Module
function Dashboard() {
  return (
    <div className={styles.container}> {/* Contenedor principal del Dashboard */}
      <h1>Dashboard</h1> {/* Título del Dashboard */}
      <nav> {/* Sección de navegación */}
        <ul> {/* Lista desordenada para los enlaces de navegación */}
          <li><Link to="profile">Profile</Link></li> {/* Enlace a la ruta de perfil */}
          <li><Link to="settings">Settings</Link></li> {/* Enlace a la ruta de configuración */}
        </ul>
      </nav>
      <Outlet /> {/* Renderiza las rutas anidadas aquí, permitiendo que se muestren componentes hijos */}
    </div>
  );
}

export default Dashboard; // Exporta el componente Dashboard para que pueda ser utilizado en otras partes de la aplicación.