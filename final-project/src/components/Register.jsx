import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image_url: "",
    password: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreedToTerms) {
      Swal.fire("Error!", "You must agree to the terms of service!", "error");
      return;
    }

    try {
      const response = await axios.post("https://final-project-api-alpha.vercel.app/api/auth/register", {
        name: formData.name,
        email: formData.email,
        image_url: formData.image_url,
        password: formData.password,
      });

      if (response.status === 201) {
        Swal.fire("Registration Success!", "Please login to continue!", "success");
        navigate("/login");
      }
    } catch (error) {
      Swal.fire("Registration Failed!", error.response?.data?.message || "An error occurred", "error");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Start Your Journey with
            <span className="bg-gradient-to-r from-[#6149C3] to-[#B65BC2] text-transparent bg-clip-text"> NextStep </span>
          </h2>
          <p className="text-gray-600">Create your account in 30 seconds</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture URL <span className="text-gray-500 text-xs">(Contoh: https://www.istockphoto.com/photo/closeup-portrait.jpg)</span>
            </label>
            <input
              type="url"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              minLength="8"
              required
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-[#6149C3] border-gray-300 rounded focus:ring-[#6149C3]" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} required />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <Link to="#" className="text-[#6149C3] hover:underline">
                Terms of Service
              </Link>
            </label>
          </div>

          <button type="submit" className="w-full bg-[#6149C3] hover:bg-[#B65BC2] text-white py-3 px-6 rounded-lg transition-colors">
            Create Account
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#6149C3] hover:text-[#B65BC2] font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
