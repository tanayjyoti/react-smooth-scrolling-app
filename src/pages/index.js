// home page
import React, { useState } from "react";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { Data } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/OfferedServices";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleSidebarHandler = () => {
    setToggleSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar isOpen={toggleSidebar} toggle={toggleSidebarHandler} />
      <Navbar toggle={toggleSidebarHandler} />
      <HeroSection />
      {Data.map((item) =>
        item.id === "services" ? (
          <Services key={item.id} services={item.services} />
        ) : (
          <InfoSection key={item.id} {...item} />
        )
      )}
      <Footer />
    </>
  );
};

export default HomePage;
