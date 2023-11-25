import React from "react";
import ModelRegistration from "./pages/Registration";
import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import Addproduct from "./pages/Addproduct";
import Account from "./pages/Account";
import Navbar from "./compnents/Navbar";
import Blacktagline from "./compnents/Announcement";
import Profilepage from "./pages/Profilepage";
import Silk from "./pages/Collection/Silk";
import Cotton from "./pages/Collection/Cotton";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Blacktagline />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/registration" element={<ModelRegistration />} />
          <Route path="/collection" element={<Collection />} />

          {/* Category */}
          <Route path="/collection/silk" element={<Silk />} />
          <Route path="/collection/cotton" element={<Cotton />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
