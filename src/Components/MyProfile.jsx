import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await updateUserProfile({ displayName: name, photoURL });
      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
        photoURL,
      }));
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      setErrorMessage("Failed to update profile. Please try again.");
    }
  };

  useEffect(() => {
    document.title = "DreamTrack | My profile"; 
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-100 to-blue-200">
      <div className="bg-white shadow-lg border rounded-lg px-8 py-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Profile
        </h2>

        {/* User Information */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL || "https://default-image-url.com"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-green-400 shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {user?.displayName || "No Name Provided"}
          </h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Update Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-green-400 focus:border-green-400 focus:outline-none"
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Update Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-green-400 focus:border-green-400 focus:outline-none"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
          >
            Update Profile
          </button>
        </form>

        {/* Success and Error Messages */}
        {successMessage && (
          <p className="text-green-600 text-sm mt-4 text-center">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-sm mt-4 text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
