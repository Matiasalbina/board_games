import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarGames from "./components/NavbarGames";
import "../dist/output.css";
import Home from "./views/generalviews/Home"
import "tw-elements";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from "./views/userviews/UserLogin";
import UserRegister from "./views/userviews/UserRegister";
import Eurogames from "./views/generalviews/Eurogames";



function App() {
  return (
    <>
      <Router>
        <NavbarGames />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/eurogames" element={<Eurogames />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
