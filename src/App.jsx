import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Pages/Sidebar";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router className="bg-blue-600">
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Router>
  );
};

export default App;
