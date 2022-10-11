import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Cursos from "./components/Cursos";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Estudiantes from "./components/Estudiantes";
import Maestros from "./components/Maestros";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/cursos" element={<Cursos/>} />
          <Route path="/estudiantes" element={<Estudiantes/>} />
          <Route path="/maestros" element={<Maestros/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </>

    </BrowserRouter>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

