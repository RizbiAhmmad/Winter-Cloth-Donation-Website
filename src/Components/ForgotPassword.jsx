import React, { useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "DreamTrack | Forgot Password"; 
  }, []);

  const prefillEmail = location?.state?.email || "";
  React.useEffect(() => {
    if (prefillEmail) setEmail(prefillEmail);
  }, [prefillEmail]);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const auth = getAuth();

    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset email sent successfully!");

        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch((error) => {
        setError("Failed to send reset email. Please try again.");
        console.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handlePasswordReset}
        className="bg-white shadow-lg border rounded-lg px-10 py-8 w-full max-w-sm"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Reset Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email to reset your password.
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Reset Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
        >
          Reset Password
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-center text-sm text-red-500 mt-4">{error}</p>
        )}

        {/* Success Message */}
        {message && (
          <p className="text-center text-sm text-green-600 mt-4">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
