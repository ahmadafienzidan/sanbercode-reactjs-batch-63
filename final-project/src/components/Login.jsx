import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        const from = location.state?.from?.pathname || "/dashboard";
        navigate(from, { replace: true });
        Swal.fire("Login Berhasil!", "Selamat datang kembali", "success");
      }
    } catch (error) {
      console.error("Error login:", error);
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back to
            <span className="bg-gradient-to-r from-[#6149C3] to-[#B65BC2] text-transparent bg-clip-text"> NextStep </span>
          </h2>
          <p className="text-gray-600">Login to continue your career journey</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button type="button" onClick={() => setPasswordShown(!passwordShown)} className="text-[#6149C3] text-sm">
            {passwordShown ? "Hide" : "Show"} Password
          </button>

          <button type="submit" className="w-full bg-[#6149C3] hover:bg-[#B65BC2] text-white py-3 px-6 rounded-lg transition-colors">
            Sign In
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#6149C3] hover:text-[#B65BC2] font-semibold">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
