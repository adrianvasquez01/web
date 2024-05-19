import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError('Por favor, ingrese sus credenciales');
      return;
    }
    if (username === 'admin' && password === 'admin') {
      console.log('Inicio de sesión exitoso');
      navigate('/inicio');
    } else {
      setError('Credenciales incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-header">Inicio de Sesión</h2>
        <form className="login-form">
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              className="input-field"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="button" className="login-btn" onClick={handleLogin}>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
