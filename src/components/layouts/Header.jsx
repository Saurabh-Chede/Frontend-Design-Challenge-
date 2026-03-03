import { HomeIcon } from "lucide-react";
const Header = () => {
 
  return (
    <nav className="p-4 flex justify-between bg-white capitalize text-sm text-gray-600 border-b border-b-gray-300">
      <div className="flex gap-2 items-center">
        <p>scan</p>
        <HomeIcon size={12}></HomeIcon>
        /
        <p>private assets</p>
        /
        <p className="text-teal-600">new scan</p>
      </div>
      <div className="flex gap-2">
        <button className="py-1.5 px-2 border rounded border-gray-400 text-gray-600 capitalize">export reports</button>
        <button className="py-1.5 px-2 border bg-red-100 rounded border-red-200 text-red-600 capitalize ">stop scan</button>
      </div>
    </nav>
  );
};

export default Header;