"use client";
import SearchBar from "./searchbar";
import NavbarMenu from "../molecules/navbar-menu";
const Navbar = () => {
  return (
    <div className="w-full bg-white h-16 flex justify-between px-5 items-center">
      <SearchBar />
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
