import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import LeftBanner from "./components/Banner/LeftBanner";
import Features from "./components/features/features";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
      </div>
    </div>
  );
}

export default App;
