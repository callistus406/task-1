import { WarningIcon } from "../../icons/icons";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <WarningIcon className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
