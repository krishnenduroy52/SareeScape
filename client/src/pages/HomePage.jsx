import React from "react";
import Navbar from "../compnents/Navbar";
import Blacktagline from "../compnents/Announcement";
import Homepagecontent from "../compnents/Homepagecontent";
import Category from "../compnents/Category";
import Homepageposter from "../compnents/Homepageposter";
import Festivecollection from "../compnents/Festtivecollection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Blacktagline />
      <Homepagecontent />
      <Category />
      <Homepageposter />
      <Festivecollection />
    </div>
  );
};

export default HomePage;
