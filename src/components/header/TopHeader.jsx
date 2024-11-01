import React from "react";
import Container from "./Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className={"flex items-center justify-between"}>
        <p className="w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1">
          {" "}
          <CiDeliveryTruck className="text-red-700 text-2xl mr-1" />
          Express Shipping on orders $570+
        </p>
        <div className="hidden md:flex items-center text-sm text-white">
        <p className="headerTopMenu">English <IoChevronDownSharp className="mt-1"/></p>
        <p className="headerTopMenu">USD <IoChevronDownSharp className="mt-1"/></p>
        <p className="headerTopMenu">Setting <IoChevronDownSharp className="mt-1"/></p>


        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
