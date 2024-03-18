import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import credentials from ".././data/Credentials.json";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (attempt >= 3) {
      alert("Too many failed login attempts. Please try again later.");
      setDisabled(true);
      return;
    }

    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setAttempt(0);
      setDisabled(false);
      navigate("/home");
    } else {
      setAttempt(attempt + 1);
      alert("Invalid credentials!");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="p-12 bg-white rounded shadow-xl w-96">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-6 text-primary border-b-2 border-primary outline-none focus:bg-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-6 text-primary border-b-2 border-primary outline-none focus:bg-gray-300"
          />
          <button
            onClick={handleLogin}
            disabled={disabled}
            style={{ cursor: disabled ? "not-allowed" : "pointer" }}
            className={`w-full ${
              disabled ? "bg-gray-500" : "bg-cyan-600 hover:bg-cyan-800"
            } text-white font-semi-bold p-2 rounded shadow-xl`}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
