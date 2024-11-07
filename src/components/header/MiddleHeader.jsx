import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { logo } from "@/assets/assets";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import HeaderIcons from "./HeaderIcons";
import MobileNavigation from "./MobileNavigation";
import {  signOut, useSession } from "next-auth/react";

const MiddleHeader = () => {
  const { data: session } = useSession(); 
  console.log(session)





  return (
    <div>
      <Container
        className={
          "flex py-5 items-center gap-4 md:gap-6 lg:gap-20 justify-between"
        }
      >
        <Link href={"/"}>
          <Image className="bg-red-600 w-28" src={logo} alt="Logo" />
        </Link>
        <SearchInput />

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <Link href={"/signin"}>
            <div className="border-2 border-gray-700 p-1.5 text-xl rounded-full">
              <LiaUser />
            </div>
          </Link>
          <div>
            <p className="text-xs">Hello, {session ? session.user.name : "Guest"}</p>
            {session ? (
              <button className="hover:bg-themeColor p-1 rounded-lg" onClick={() => signOut()}>
                Sign Out
              </button>
            ) : (
              <p className="font-medium">
                <Link href={"/signin"}>Login</Link> / <Link href={"/register"}>Register</Link>
              </p>
            )}
          </div>
          <HeaderIcons />
        </div>
        <MobileNavigation />
      </Container>
    </div>
  );
};

export default MiddleHeader;
