import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
    const user = { username: username, password: password };
    const data = JSON.stringify(user);

    const response = await fetch('http://localhost:8080/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    if (response.status === 200) {
      console.log(response);
      navigate("/home");
    } else {
      alert("Login Failed");
    }
  };


  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
