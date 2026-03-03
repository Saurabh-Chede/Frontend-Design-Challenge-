import { 
  Home, 
  ChevronRight, 
  Download, 
  SquareStop 
} from "lucide-react";
import ThemeToggle from "../ToggleTheme";

const Header = () => {
  return (
    <nav
      className="p-4 flex justify-between items-center text-sm 
      bg-white text-gray-600 border-b border-gray-200
      dark:bg-gray-950 dark:text-gray-200 dark:border-gray-800
      transition-colors duration-300"
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <span className="hidden sm:inline">scan</span>
        <Home size={14} />
        <ChevronRight size={14} />
        <span className="hidden sm:inline">private assets</span>
        <ChevronRight size={14} />
        <span className="text-teal-600 dark:text-teal-400 font-medium">
          new scan
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Export Button */}
        <button
          className="flex items-center gap-2 py-1.5 px-3 border rounded-md
          border-gray-300 text-gray-600 bg-white hover:bg-gray-100
          dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 
          dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Export</span>
        </button>

        {/* Stop Scan Button */}
        <button
          className="flex items-center gap-2 py-1.5 px-3 rounded-md
          bg-red-100 border border-red-200 text-red-600 hover:bg-red-200
          dark:bg-red-900/30 dark:border-red-800 dark:text-red-400
          dark:hover:bg-red-900/50 transition-colors duration-200"
        >
          <SquareStop size={16} />
          <span className="hidden sm:inline">Stop</span>
        </button>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;