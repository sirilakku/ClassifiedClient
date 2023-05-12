import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
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


// import React, { useState, useEffect } from "react";

// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const Login = () => {
//     const clientId = "920068830599-o9v3hshtbe58nnthed1g68859n15151t.apps.googleusercontent.com";
    
//     const [showloginButton, setShowloginButton] = useState(true);
//     const [showlogoutButton, setShowlogoutButton] = useState(false);
//     const onLoginSuccess = (res) => {
//                 console.log('Login Success:', res.profileObj);
//                 setShowloginButton(false);
//                 setShowlogoutButton(true);
//             };
        
//             const onLoginFailure = (res) => {
//                 console.log('Login Failed:', res);
//             };
        
//             const onSignoutSuccess = () => {
//                 alert("You have been logged out successfully");
//                 console.clear();
//                 setShowloginButton(true);
//                 setShowlogoutButton(false);
//             };
//   return (
//     // <div>Login Page</div>
//     <div>
//         <h1>Login</h1>
//         <GoogleLogin
//     clientId={clientId}
//     buttonText="Login with Google"
//     // onSuccess={responseGoogle}
//     // onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />
//     </div>
//   )
// }

// export default Login




