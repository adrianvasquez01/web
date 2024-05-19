import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import VistaPrincipal from "./components/VistaPrincipal";
import Medicina from "./components/Medicina";
import Alimentos from "./components/Alimentos";
import Maquinaria from "./components/Maquinaria";
import Utencilios from "./components/Utencilios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<VistaPrincipal />}>
          <Route path="medicina" element={<Medicina />} />
          <Route path="alimentos" element={<Alimentos />} />
          <Route path="maquinaria" element={<Maquinaria />} />
          <Route path="utencilios" element={<Utencilios />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
