import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product";
import Student from "./Student";
import Counter from "./Counter";
import ContactForm from "./ContactForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="Product" element={<Product/>}></Route>
        <Route path="Student" element={<Student/>}></Route> 
        <Route path="Counter" element={<Counter/>}></Route>
        <Route path="ContactForm" element={<ContactForm/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
