// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import Alert from "../components/Alert";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("info");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(form);
      localStorage.setItem("token", response.token); // Simpan token ke localStorage
      setAlertMessage("Login successful!");
      setAlertVariant("success");
      navigate("/"); // Arahkan ke halaman beranda atau halaman yang dilindungi
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error || "Login failed. Check your credentials.";
      setAlertMessage(errorMessage);
      setAlertVariant("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-fit bg-gray-100 py-16">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Login</h2>
        {alertMessage && (
          <Alert message={alertMessage} variant={alertVariant} />
        )}
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <button type="submit" className="w-full py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
