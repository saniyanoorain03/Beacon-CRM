import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", formData);

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login successful!");

      // Redirect based on role
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed."
      );
    }
  };

  return (
  <div className="auth-page">
    <div className="auth-card">

      <div className="auth-header">
        <h1>Beacon</h1>
        <p>Welcome back</p>
        <span>Sign in to continue managing consultation requests.</span>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Sign In
        </button>

      </form>

      <p className="auth-switch">
        Don't have an account?
        <Link to="/register"> Create one</Link>
      </p>

    </div>
  </div>
);
}

export default Login;