/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import { GlobalSheet } from "./sheet/page";

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
          {/* <Menu className="absolute left-4 top-6" /> */}
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
