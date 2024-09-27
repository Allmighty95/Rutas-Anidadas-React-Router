// src/App.jsx
// Importa las librerías necesarias de React y React Router
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes que se utilizarán en las rutas
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

// Componente principal de la aplicación
function App() {
  // Estado para gestionar la autenticación del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // Envuelve la aplicación en el Router para habilitar el enrutamiento
    <Router>
      {/* Define las rutas de la aplicación */}
      <Routes>
        {/* Ruta principal que renderiza el componente Home */}
        <Route path="/" element={<Home />} />
        {/* Ruta para la página "About" */}
        <Route path="/about" element={<About />} />
        {/* Ruta para la página "Contact" */}
        <Route path="/contact" element={<Contact />} />
        {/* Ruta para la página "Login", pasando la función setIsAuthenticated como prop */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        {/* Ruta protegida para el "Dashboard", que requiere autenticación */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Rutas anidadas dentro del Dashboard */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* Ruta para manejar páginas no encontradas (404) */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

// Exporta el componente App para su uso en otras partes de la aplicación
export default App;