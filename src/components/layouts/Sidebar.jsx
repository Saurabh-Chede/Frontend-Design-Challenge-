import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ClipboardCheck } from "lucide-react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-full transition-all ${
      isActive
        ? "bg-teal-100/30 text-teal-600"
        : "text-gray-700 dark:text-gray-300 hover:bg-teal-100/20 dark:hover:bg-gray-700"
    }`;

  return (
    <aside className="relative w-64 min-h-screen bg-white dark:bg-gray-800 border-r border-r-gray-200 p-5">
      <div className="mb-10 text-2xl font-bold text-teal-600 flex gap-2 items-center">
       <div className="w-10 flex justify-center items-center relative h-10 rounded-full bg-teal-600">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        aps
      </div>

      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard" className={linkStyle}>
          <MdOutlineDashboardCustomize />
          Dashboard
        </NavLink>

        <NavLink to="/projects" className={linkStyle}>
          <ClipboardCheck size={18} />
          Projects
        </NavLink>

        <NavLink to="/scans" className={linkStyle}>
          <BsFileEarmarkBarGraph />
          Scans
        </NavLink>

        <NavLink to="/schedule" className={linkStyle}>
          <HiOutlineCalendar />
          Schedule
        </NavLink>

        <hr className="my-4 border-gray-200 dark:border-gray-600" />

        <NavLink to="/notifications" className={linkStyle}>
          <IoIosNotificationsOutline />
          Notifications
        </NavLink>

        <NavLink to="/settings" className={linkStyle}>
          <IoSettingsOutline />
          Settings
        </NavLink>

        <NavLink to="/support" className={linkStyle}>
          <CiCircleInfo />
          Support
        </NavLink>
      </nav>

      <div className="absolute bottom-6 left-5 text-sm text-gray-600 dark:text-gray-400">
        Security Lead
      </div>
    </aside>
  );
};

export default Sidebar;