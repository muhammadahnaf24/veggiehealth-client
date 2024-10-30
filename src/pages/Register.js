// src/pages/Register.js
import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("info");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(form); // Ensure you're using the response correctly
      localStorage.setItem("token", response.token); // Assuming your register function returns a token
      setAlertMessage("Registration successful! Redirecting to login...");
      setAlertVariant("success");
      setTimeout(() => {
        navigate("/login"); // Redirect after a delay
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Registration failed. Please try again.";
      setAlertMessage(errorMessage);
      setAlertVariant("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-fit bg-gray-100 py-16">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Register</h2>
        {alertMessage && (
          <Alert message={alertMessage} variant={alertVariant} />
        )}
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          ></button>
        </form>
      </div>
    </div>
  );
}

export default Register;
