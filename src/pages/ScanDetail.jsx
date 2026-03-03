import { useState } from "react";
import {
  Bug,
  Network,
  FlaskConical,
  ClipboardCheck,
  FileText,
} from "lucide-react";
import logs from "../data/scanLogs.json";

const ScanDetail = () => {
  const [activeTab, setActiveTab] = useState("activity");

  const steps = [
    {
      label: "Spidering",
      icon: <Bug size={16} strokeWidth={1.8} />,
      active: true,
    },
    { label: "Mapping", icon: <Network size={16} strokeWidth={1.8} /> },
    { label: "Testing", icon: <FlaskConical size={16} strokeWidth={1.8} /> },
    {
      label: "Validating",
      icon: <ClipboardCheck size={16} strokeWidth={1.8} />,
    },
    { label: "Reporting", icon: <FileText size={16} strokeWidth={1.8} /> },
  ];

  const findings = [
    {
      severity: "Critical",
      color: "bg-red-500",
      title: "SQL Injection in Authentication Endpoint",
      endpoint: "/api/users/profile",
    },
    {
      severity: "High",
      color: "bg-orange-500",
      title: "Unauthorized Access to User Metadata",
      endpoint: "/api/auth/login",
    },
    {
      severity: "Medium",
      color: "bg-yellow-500",
      title: "Broken Authentication Rate Limiting",
      endpoint: "/api/search",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-3">
        <div className="flex gap-12 items-center">
          <div className="w-28 h-28 rounded-full bg-gray-900 text-white flex flex-col items-center justify-center shrink-0">
            <h2 className="text-3xl font-bold text-teal-400">0%</h2>
            <p className="text-xs text-gray-300 mt-1">In Progress</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col">
            <div className="relative flex justify-between items-center mb-8">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200"></div>

              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center relative z-10"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2
                      ${
                        step.active
                          ? "bg-teal-600 text-white border-teal-600 shadow-md"
                          : "bg-white text-gray-400 border-gray-300"
                      }`}
                  >
                    {step.icon}
                  </div>
                  <p className="text-xs mt-2 text-gray-600">{step.label}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center border-t-2 border-t-gray-300 pt-6 text-sm">
              {[
                { label: "Scan Type", value: "Grey Box" },
                { label: "Targets", value: "google.com" },
                { label: "Started At", value: "Nov 22, 09:00AM" },
                { label: "Credentials", value: "2 Active" },
                { label: "Files", value: "Control.pdf" },
                { label: "Checklists", value: "40/350", highlight: true },
              ].map((item, i) => (
                <div key={i} className="flex flex-col min-w-30">
                  <span className="text-[11px] text-gray-400 uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span
                    className={`text-sm font-semibold mt-1 ${
                      item.highlight ? "text-teal-600" : "text-gray-800"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center border-b border-gray-300 px-6 py-4">
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
            Live Scan Console
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
              Running...
            </span>
          </div>
          <span className="text-gray-400 cursor-pointer text-lg">×</span>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-2 border-r border-gray-300">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 bg-gray-50 px-6">
              {[
                { id: "activity", label: "Activity Log" },
                { id: "verification", label: "Verification Loops" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-2 px-4 text-sm font-medium transition-colors
              ${
                activeTab === tab.id
                  ? "text-teal-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Activity Content */}
            <div
              className="p-6 text-sm text-gray-700 space-y-3 overflow-y-auto"
              style={{
                fontFamily:
                  "JetBrains Mono, ui-monospace, SFMono-Regular, monospace",
                maxHeight: "420px",
              }}
            >
              {activeTab === "activity" && (
                <>
                  {logs.map((log, index) => (
                    <p key={index}>
                      <span className="text-gray-400">[{log.time}]</span>{" "}
                      <span className="text-black">{log.message}</span>
                    </p>
                  ))}
                </>
              )}

              {activeTab === "verification" && (
                <>
                  <p>🔁 Re-testing authentication endpoint...</p>
                  <p>✔ SQL Injection payload validated</p>
                  <p>✔ Rate-limit bypass confirmed</p>
                  <p>✔ IDOR exploitation reproduced</p>
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - span 1 */}
          <div className="col-span-1 bg-gray-50">
            <div className="border-b border-gray-300 py-2 px-2">
              <h3 className="text-sm flex items-center font-semibold text-gray-700">
                Finding Log
              </h3>
            </div>

            <div className="px-2 py-2 flex flex-col gap-2">
              {findings.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-300 rounded-xl p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`${item.color} text-white text-xs px-2 py-1 rounded-full`}
                    >
                      {item.severity}
                    </span>
                    <span className="text-xs text-gray-400">10:45:23</span>
                  </div>

                  <h3 className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </h3>

                  <p className="text-teal-600 text-xs mt-1">{item.endpoint}</p>

                  <p className="text-xs text-gray-500 mt-2">
                    Time-based vulnerability detected. Exploitation allows
                    database-level access.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM STATUS ================= */}
      <div className="mt-4 text-xs text-gray-500 flex justify-between border-t border-t-gray-300 pt-4">
        <div className="flex gap-6">
          <p>Sub-Agents: 0</p>
          <p>Parallel Executions: 2</p>
          <p>Operations: 1</p>
        </div>
        <div className="flex gap-6">
          <p className="text-red-500">Critical: 0</p>
          <p className="text-orange-500">High: 0</p>
          <p className="text-yellow-500">Medium: 0</p>
          <p className="text-green-500">Low: 0</p>
        </div>
      </div>
    </div>
  );
};

export default ScanDetail;
