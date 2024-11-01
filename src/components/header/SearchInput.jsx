"use client";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="hidden md:flex flex-1 items-center h-10 relative">
      <input
        type="text"
        placeholder="Search Product Here..."
        className="w-full h-full border-2 outline-none border-themeColor pl-4 pr-10" // Adds space for the icon
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search && (
        <RiCloseLine
          className="absolute right-11 text-xl text-gray-400 hover:text-red-500"
          onClick={() => setSearch("")}
        />
      )}
      <span className="absolute right-0 top-0 w-10 h-full bg-themeColor/80 text-white flex items-center justify-center hover:bg-themeColor cursor-pointer ">
        <RiSearchLine />
      </span>
    </div>
  );
};

export default SearchInput;
