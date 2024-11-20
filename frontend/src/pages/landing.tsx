import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/sign-in");
  };

  const handleTeacherLogin = () => {
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-300 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-8 tracking-wide text-center drop-shadow-lg">
        Development In Progress
      </h1>

      <p className="text-lg mb-10 text-center px-6 max-w-md drop-shadow-sm">
        Welcome to the platform! Please choose the appropriate login option to
        proceed.
      </p>

      <div className="flex gap-x-4 justify-center items-center">
        <button
          onClick={handleAdminLogin}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Admin Login
        </button>

        <button
          onClick={handleTeacherLogin}
          className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          Teacher Login
        </button>
      </div>

      <footer className="absolute bottom-5 text-gray-300 text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
};

export default LandingScreen;
