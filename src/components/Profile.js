import React from 'react';
import styles from '../styles/Profile.module.css'; // Importa el archivo CSS Module

function Profile() {
  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      <button className={styles.button}>Change Name</button>
    </div>
  );
}

export default Profile;
