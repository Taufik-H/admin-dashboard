import React from "react";
import Input from "../atoms/input";
import { IoSearchOutline } from "react-icons/io5";
const SearchInput = () => {
  return (
    <div className="bg-slate-100 py-2 px-5 rounded-full flex items-center gap-2 focus-within:border-blue-500  border transition-all duration-300 ease-in">
      <IoSearchOutline />
      <Input />
    </div>
  );
};

export default SearchInput;
