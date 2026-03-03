import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-6">
      
      <h1 className="text-6xl font-bold mb-4 text-red-600 dark:text-red-400">
        404
      </h1>
      
      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      
      <Link
        to="/dashboard"
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors"
      >
        Go Back Home
      </Link>
      
    </div>
  );
};

export default NotFound;