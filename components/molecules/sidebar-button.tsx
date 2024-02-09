"use client";
import React, { useState } from "react";
import { SIDEBAR_MENU_ITEM } from "../constant";
import Link from "next/link";

import { usePathname } from "next/navigation";

const SidebarButton = () => {
  const currentRoute = usePathname();

  return (
    <>
      <div className="md:bg-slate-100 md:rounded-full  py-5 lg:bg-transparent lg:rounded-none ">
        {SIDEBAR_MENU_ITEM.map((item, index) => (
          <ul
            key={index}
            className={
              item.path == currentRoute
                ? `text-blue-500  py-2 px-4  rounded-lg font-semibold `
                : `hover:text-blue-500 text-slate-500 py-2 px-4  rounded-lg transition-all duration-200 ease-in-out`
            }
          >
            <li className="mb-5">
              <Link
                href={item.path}
                className="flex md:justify-center lg:justify-start items-center gap-2 "
              >
                <div>{item.icon}</div>
                <div className="md:hidden lg:block text-sm">{item.name}</div>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default SidebarButton;
