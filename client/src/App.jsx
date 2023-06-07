import React from "react";
import ModelRegistration from "./pages/Registration";
import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/registration" element={<ModelRegistration />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
