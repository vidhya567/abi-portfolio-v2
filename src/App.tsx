import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./imports/HomePage";
import Norukku from "./pages/norukku/norukku";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/norruku" element={<Norukku />} />
      </Routes>
    </BrowserRouter>
  );
}
