import React, { useState } from "react";
import "./loginStyles.css";
import companyLogo from "../assests/companylogo.png";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  // const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "webapp@xyz.com" && password === "12345") {
      // If authentication is successful, navigate to the  home
      navigate("/home");
      console.log("Authentication sucess");
      // Call the onLoginSuccess callback
      onLoginSuccess();
    } else {
      console.log("Authentication failed");
      alert("Incorrect credentials");
    }
  };

  return (
    <div
      className="login-container"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div>
        <img
          src={companyLogo}
          alt="Company Logo"
          style={{
            margin: "10px",
            marginTop: "80px",
            width: "100%",
            maxWidth: "90px",
            maxHeight: "90px",
            marginBottom: "10px",
          }}
        />
      </div>

      <div>
        {" "}
        <p
          style={{
            color: "#36A546CC",
            fontFamily: "normal normal normal  Mulish",
            marginTop: "20px",
            fontSize: "21px",
            letterSpacing: "0.02px",
            opacity: "1",
          }}
        >
          We are electric
        </p>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          {/* Email input */}
          <div
            className="input-container"
            style={{
              top: "200px",
              left: "61px",
              width: "238px",
              height: "32px",
              padding: "10px",
            }}
          >
            <label htmlFor="email" style={{ color: "grey", fontSize: "14px" }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "whitesmoke",
                margin: "5px ",
                padding: "5px",
                outline: "none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password input */}
          <div
            className="input-container"
            style={{
              top: "300px",
              left: "61px",
              width: "238px",
              height: "32px",
              padding: "10px",
            }}
          >
            <label
              htmlFor="password"
              style={{ color: "grey", fontSize: "14px" }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "whitesmoke",
                margin: "0px ",
                padding: "5px",
                outline: "none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login button */}
          <div className="button-container">
            <button
              type="submit"
              className="login-button"
              style={{
                top: "400px",
                left: "61px",
                width: "238px",
                height: "42px",
                cursor: "pointer",
                color: "#FFFFFF8C",
              }}
            >
              Login
            </button>
          </div>

          {/* Forgot password text */}

          <div className="forgot-text">
            <a href="#" style={{ color: "#00FF2580" }}>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
