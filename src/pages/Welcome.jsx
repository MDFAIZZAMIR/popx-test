import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-end p-6 bg-gray-100">
      <div className="w-full">
        <h2 className="text-2xl font-bold">Welcome to PopX</h2>

        <button
          onClick={() => navigate("/register")}
          className="w-full bg-purple-600 text-white py-3 rounded-lg mt-6"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-purple-200 py-3 rounded-lg mt-3"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;