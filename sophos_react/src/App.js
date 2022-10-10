import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./components/Home";
import Cursos from "./components/Cursos";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/cursos" element={<Cursos/>} />
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

