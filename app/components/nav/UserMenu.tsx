"use client";

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";

interface userMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu = ({ currentUser }: userMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30 ">
        <div
          onClick={toggleOpen}
          className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700 "
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer dark:text-white dark:bg-medium  ">
            {currentUser ? (
              <div>
                <div className="px-4 py-2 capitalize flex justify-center ">
                  {currentUser?.name}
                </div>
                <hr />
                <Link href="/orders" className="hover:dark:text-medium">
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                {currentUser?.role === "ADMIN" && (
                  <Link href="/admin" className="hover:dark:text-medium">
                    <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                  </Link>
                )}
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
