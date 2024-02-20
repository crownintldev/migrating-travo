/** @format */
"use client";

// React Imports
import { useState } from "react";

// Normal Imports
import { Nav } from "./ui/nav";
import { GlobalSheet } from "./drawer/page";

export default function SideNavbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);

    console.log("mobile responsive result", isMobileNavVisible)
  };

  return (
    <>
      <div className="absolute left-[-3px] top-9">
        <button
          className="lg:hidden block p-2"
          onClick={toggleMobileNav}
          aria-label="Toggle Navigation"
        >
          <GlobalSheet title="sidebar" side='left'>
            <Nav />
          </GlobalSheet>
        </button>
      </div>
      <div className={`${isMobileNavVisible ? "hidden" : "hidden"} lg:block`}>
        <Nav />
      </div>
    </>
  );
}
