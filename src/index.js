import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product";
import Student from "./Student";
import Counter from "./Counter";
import ContactForm from "./ContactForm";
import Detail from "./DetailStu";
import PDetail from "./PDetail";
import Effect from "./effect";
import Api from "./Api";
import ApiDetail from "./ApiDetail";
import Addmember from "./AddMember";
import Laptop from "./Laptop";
import AddLaptop from "./addLaptop";
import LapTopDetail from "./LapTopDetail";


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
        <Route path="PDetail/:id" element={<PDetail/>}></Route>
        <Route path="Student" element={<Student/>}></Route> 
        <Route path="Detail/:id" element={<Detail/>}></Route> 
        <Route path="Counter" element={<Counter/>}></Route>
        <Route path="ContactForm" element={<ContactForm/>}></Route>
        <Route path="effect" element={<Effect/>}></Route> 
        <Route path="Api" element={<Api/>}></Route>
        <Route path="ApiDetail/:id" element={<ApiDetail/>}></Route>
        <Route path="AddMember" element={<Addmember/>}></Route>
        <Route path="AddMember/:id" element={<Addmember/>}></Route>
        <Route path="LapTop" element={<Laptop/>}></Route>
        <Route path="addLaptop" element={<AddLaptop/>}></Route>
        <Route path="addLaptop/:id" element={<AddLaptop/>}></Route>
        <Route path="LapTopDetail/:id" element={<LapTopDetail/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
