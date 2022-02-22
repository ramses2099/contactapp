import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import Home from "./components/Home";
import EditContact from "./components/EditContact";

const App = () => {
  const notify = () => {
    toast("Wow so easy!");
  };

  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      <div className="row py-5">
        <div className="col-12">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contacts" element={<AddContact />} />
            <Route path="/contacts/:id" element={<EditContact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
