import { useState } from "react";
import mockData from '../data/mockScans.json'; 
import {
  Filter,
  Columns,
  Plus,
  ShieldX,
  AlertTriangle,
  AlertCircle,
  Search,
  SearchAlert,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [rows, setRows] = useState(mockData);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const [showModal, setShowModal] = useState(false);
  const [newScanName, setNewScanName] = useState("");
  const [newScanType, setNewScanType] = useState("Greybox");

  // filtering
  let displayedRows = rows.filter((row) => {
    const searchLower = searchTerm.toLowerCase();
    const nameMatch = row.name.toLowerCase().includes(searchLower);
    const typeMatch = row.type.toLowerCase().includes(searchLower);

    const statusMatch =
      statusFilter === "All" || row.status === statusFilter;

    return (nameMatch || typeMatch) && statusMatch;
  });


  displayedRows = [...displayedRows].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Pagination
  const totalPages = Math.ceil(displayedRows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRows = displayedRows.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  const handleAddScan = (e) => {
    e.preventDefault();
    if (!newScanName.trim()) return;

    const newRow = {
      name: newScanName.trim(),
      type: newScanType,
      status: "Scheduled",
      progress: 0,
      vulnerabilities: [],
      lastScan: "Just now",
    };

    setRows([newRow, ...rows]);
    setNewScanName("");
    setShowModal(false);
  };

  const statusStyle = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Scheduled:
      "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    Failed:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  const vulnColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-6 min-h-screen transition-colors duration-300">
      <div className="flex text-sm text-gray-600 dark:text-gray-400 mb-6">
        <div className="flex gap-6 justify-between w-full">
          <p>
            <span className="font-semibold">Org:</span> Project X
          </p>
          <p>
            <span className="font-semibold">Owner:</span> Nammagiri
          </p>
          <p>Total Scans: {rows.length}</p>
          <p>Scheduled: 1000</p>
          <p>Rescans: 100</p>
          <p>Failed Scans: 100</p>
          <p className="text-teal-600">⟳ 10 mins ago</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        {[
          {
            title: "Critical Severity",
            value: 86,
            change: "+2% increase than yesterday",
            icon: <ShieldX size={18} />,
            iconBg: "bg-pink-100 dark:bg-pink-900/30",
            iconColor: "text-pink-600 dark:text-pink-400",
            changeColor: "text-pink-600",
          },
          {
            title: "High Severity",
            value: 16,
            change: "+0.9% increase than yesterday",
            icon: <AlertTriangle size={18} />,
            iconBg: "bg-orange-100 dark:bg-orange-900/30",
            iconColor: "text-orange-600 dark:text-orange-400",
            changeColor: "text-pink-600",
          },
          {
            title: "Medium Severity",
            value: 26,
            change: "+0.9% decrease than yesterday",
            icon: <AlertCircle size={18} />,
            iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
            iconColor: "text-yellow-600 dark:text-yellow-400",
            changeColor: "text-green-600",
          },
          {
            title: "Low Severity",
            value: 16,
            change: "+0.9% increase than yesterday",
            icon: <SearchAlert size={18} />,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600 dark:text-blue-400",
            changeColor: "text-pink-600",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm flex justify-between items-start"
          >
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.title}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {item.value}
              </h2>
              <p className={`text-xs mt-2 ${item.changeColor}`}>
                {item.change}
              </p>
            </div>
            <div className={`p-2 rounded-lg ${item.iconBg} ${item.iconColor}`}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 w-1/2">
            <Search size={16} className="text-gray-500 dark:text-gray-300 mr-2" />
            <input
              type="text"
              placeholder="Search scans by name or type..."
              className="bg-transparent outline-none w-full text-sm text-gray-800 dark:text-gray-200"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2">
              <Filter size={16} />
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-gray-100 dark:bg-gray-700 rounded px-3 py-2 outline-0 text-sm dark:text-gray-200"
              >
                <option>All</option>
                <option>Completed</option>
                <option>Scheduled</option>
                <option>Failed</option>
              </select>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm dark:text-gray-200">
              <Columns size={16} /> Column
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm"
            >
              <Plus size={16} /> New scan
            </button>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300">
            <tr>
              <th className="text-left p-4">Scan Name</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Progress</th>
              <th className="text-left p-4">Vulnerability</th>
              <th className="text-left p-4">Last Scan</th>
            </tr>
          </thead>

          <tbody>
            {paginatedRows.map((row, index) => (
              <tr
                key={index}
                className="border-t border-t-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="p-4 font-medium text-gray-900 dark:text-gray-100">
                  {row.name}
                </td>
                <td className="p-4 dark:text-gray-300">{row.type}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${statusStyle[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                      <div
                        className="h-2 bg-teal-600 rounded-full"
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                    <span className="dark:text-gray-300">
                      {row.progress}%
                    </span>
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    {row.vulnerabilities.map((vuln, i) => (
                      <span
                        key={i}
                        className={`${vulnColors[i]} text-white px-2 py-1 rounded-md text-xs`}
                      >
                        {vuln}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="p-4 text-gray-500 dark:text-gray-400">
                  {row.lastScan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-600 dark:text-gray-400 border-t border-t-gray-400 dark:border-gray-700">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage >= totalPages}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white/40 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md border border-gray-300 shadow-md">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold dark:text-white">
                New Scan
              </h2>
              <button onClick={() => setShowModal(false)}>
                <X size={24} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleAddScan}>
              <div className="mb-4">
                <label className="block text-sm mb-1 dark:text-gray-300">
                  Scan Name
                </label>
                <input
                  type="text"
                  value={newScanName}
                  onChange={(e) => setNewScanName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-1 dark:text-gray-300">
                  Type
                </label>
                <select
                  value={newScanType}
                  onChange={(e) => setNewScanType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option>Greybox</option>
                  <option>Blackbox</option>
                </select>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded dark:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded"
                >
                  Create Scan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;