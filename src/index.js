import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import AddContact from "./components/AddContact";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<AddContact />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="*" element={<div>404 - Pages not found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
