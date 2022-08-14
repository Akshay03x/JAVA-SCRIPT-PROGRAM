import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
