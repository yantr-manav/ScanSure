import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register/", form);
      navigate("/");
    } catch (err) {
      alert("Error in registration");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form onSubmit={handleRegister} className="p-8 bg-white shadow-lg rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          name="name"
          placeholder="Name"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Register</button>
      </form>
    </div>
  );
}

export default Register;
