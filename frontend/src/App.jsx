import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Agence from "./pages/Agence";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/agence" element={<Agence />} />
    </Routes>
  );
}

export default App;
