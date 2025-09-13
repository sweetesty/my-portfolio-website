import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-pink-400">404</h1>
        <p className="text-xl md:text-2xl text-white/80 mb-6">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-pink-500 hover:text-pink-400 underline font-medium transition-colors duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
