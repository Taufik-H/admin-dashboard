"use client";
import React, { useState } from "react";
import SidebarMenu from "./sidebar-menu";
import Hamburger from "hamburger-react";
import SearchBar from "./searchbar";
import NavbarMenu from "../molecules/navbar-menu";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex">
        <aside
          className={`w-fit lg:w-2/12 ${isOpen ? "block" : "hidden"} peer:transition ease-out delay-100 duration-200 md:hidden`}
        >
          <SidebarMenu />
        </aside>
        <aside className={`w-fit lg:w-2/12 hidden md:block`}>
          <SidebarMenu />
        </aside>
        <div className="w-full">
          <nav>
            <div className="w-full bg-white h-16 flex justify-between px-5 items-center">
              <SearchBar />
              <div className="flex gap-2">
                <div className="hidden md:block">
                  <NavbarMenu />
                </div>
                <div className="bock md:hidden">
                  <Hamburger toggled={isOpen} toggle={toggleSidebar} />
                </div>
              </div>
            </div>
          </nav>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
