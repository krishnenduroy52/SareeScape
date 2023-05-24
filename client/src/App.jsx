import React from "react";
import ModelRegistration from "./pages/Registration";
import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/registration" element={<ModelRegistration />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
