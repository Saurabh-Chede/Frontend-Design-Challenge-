import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="scans" element={<ScanDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
