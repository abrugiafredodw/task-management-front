import { useState } from "react";
import { loginService } from "../services/userService";

// This hook manages the login state and logic
// It handles the email and password input fields, and the form submission
const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email y contraseña son requeridos");
      return;
    }
    setError(null); // Clear previous errors
    try {
      const userAuth = await loginService({ email, password });
      if (userAuth.token) {
        localStorage.setItem("token", userAuth.token);
        window.location.href = "/";
      } else {
        setError(userAuth.message || "Credenciales incorrectas");
      }
    } catch (error) {
      setError(error.message || "Error en el inicio de sesión");
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  };
};

export { useLogin };
