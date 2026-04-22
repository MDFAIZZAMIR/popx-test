import { useState } from "react";
import InputField from "../components/InputField";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <InputField name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <InputField type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />

      <button className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4">
        Login
      </button>
    </div>
  );
}

export default Login;