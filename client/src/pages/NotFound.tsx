import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Página no encontrada</p>
      <Link to="/" style={styles.button}>Volver al inicio</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#ff4757',
  },
  message: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ff4757',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default NotFound;
