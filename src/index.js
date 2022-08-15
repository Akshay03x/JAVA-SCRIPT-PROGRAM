import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product";
import Student from "./Student";
import Detail from "./DetailStu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Student" element={<Student/>}>
          {/* <Route path="/DetailStu" element={<Detail/>}></Route> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
