import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Create an object with the email and password data
    const loginData = {
      email,
      password,
    };

    // Send the loginData to the backend
    axios
      .post("https://sareeapi.vercel.app/user/login", loginData)
      .then((response) => {
        // Handle the response from the backend
        console.log("Login response:", response.data);
        localStorage.setItem("sareelocalstorage", response.data.user);
        // navigate("/");
        window.location.href = "/";
        // Additional logic here, such as updating state or redirecting the user
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password");
  };
  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div>
          <a href="#" onClick={handleForgotPassword}>
            Forgot Password
          </a>
        </div>
        <div>
          <Link to="/registration">Create New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
