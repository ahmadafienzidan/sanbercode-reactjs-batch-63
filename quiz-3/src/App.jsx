import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManageData from "./pages/ManageData";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-data" element={<ManageData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
