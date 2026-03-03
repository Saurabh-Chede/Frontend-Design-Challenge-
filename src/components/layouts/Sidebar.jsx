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
  const [open, setOpen] = useState(true);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-full transition-all ${
      isActive
        ? "bg-teal-100/30 text-teal-600 dark:bg-teal-600/20 dark:text-teal-400"
        : "text-gray-700 dark:text-gray-300 hover:bg-teal-100/20 dark:hover:bg-gray-700"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed lg:static top-0 left-0 h-screen z-40 
        bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-700 
        transition-all duration-300 
        ${open ? "w-64 translate-x-0" : "w-20 -translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5">
          {open && (
            <div className="text-2xl font-bold text-teal-600 flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              aps
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <PanelRight color="gray" size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 px-3">
          <NavLink to="/dashboard" className={linkStyle}>
            <MdOutlineDashboardCustomize />
            {open && "Dashboard"}
          </NavLink>

          <NavLink to="/projects" className={linkStyle}>
            <ClipboardCheck size={18} />
            {open && "Projects"}
          </NavLink>

          <NavLink to="/scans" className={linkStyle}>
            <BsFileEarmarkBarGraph />
            {open && "Scans"}
          </NavLink>

          <NavLink to="/schedule" className={linkStyle}>
            <HiOutlineCalendar />
            {open && "Schedule"}
          </NavLink>

          <hr className="my-4 border-gray-200 dark:border-gray-700" />

          <NavLink to="/notifications" className={linkStyle}>
            <IoIosNotificationsOutline />
            {open && "Notifications"}
          </NavLink>

          <NavLink to="/settings" className={linkStyle}>
            <IoSettingsOutline />
            {open && "Settings"}
          </NavLink>

          <NavLink to="/support" className={linkStyle}>
            <CiCircleInfo />
            {open && "Support"}
          </NavLink>
        </nav>

        {open && (
          <div className="absolute bottom-6 left-5 text-sm text-gray-600 dark:text-gray-400">
            Security Lead
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;