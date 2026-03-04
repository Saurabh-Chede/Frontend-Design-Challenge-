import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ClipboardCheck, PanelRight } from "lucide-react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-full transition-all ${
      isActive
        ? "bg-teal-100/30 text-teal-600 dark:bg-teal-600/20 dark:text-teal-400"
        : "text-gray-700 dark:text-gray-300 hover:bg-teal-100/20 dark:hover:bg-gray-700"
    }`;

  return (
    <>
      {/* Mobile Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 
          bg-white dark:bg-gray-900 
          border border-gray-300 dark:border-gray-700 
          p-2 rounded-r-full shadow-md lg:hidden"
        >
          <PanelRight size={20} />
        </button>
      )}

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50
        bg-white dark:bg-gray-950
        border-r border-gray-200 dark:border-gray-700
        transition-transform duration-300
        w-64
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5">
          <div className="text-2xl font-bold text-teal-600 flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            aps
          </div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <PanelRight size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 px-3">
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

          <hr className="my-4 border-gray-200 dark:border-gray-700" />

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
    </>
  );
};

export default Sidebar;