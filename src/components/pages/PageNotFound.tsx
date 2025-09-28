import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleClick = () => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 gap-6 text-center">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <Button
        onClick={handleClick}
        className="mt-6 px-8 py-3 text-base sm:text-lg bg-black text-white rounded-lg hover:opacity-90 transition-opacity duration-200 min-w-[200px] touch-manipulation"
      >
        {token ? "Go to Homepage" : "Go to Login"}
      </Button>
    </div>
  );
};

export default NotFound;
