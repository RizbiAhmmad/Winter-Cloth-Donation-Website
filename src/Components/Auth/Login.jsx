import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signIn, setUser } = useContext(AuthContext); // Access AuthContext functions
  const [error, setError] = useState(""); // For error handling
  const [loading, setLoading] = useState(false); // Loading state for UI
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "WinterDonation | Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    setLoading(true);
    signIn(email, password)
      .then((result) => {
        setUser(result.user); // Set user in context
        navigate("/dashboard"); // Redirect to dashboard
      })
      .catch((err) => {
        setError(err.message); // Set error message
      })
      .finally(() => {
        setLoading(false); // Stop loading spinner
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm mb-4">
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
