import { Avatar, Button, Input } from "@nextui-org/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { PiMagnifyingGlassThin } from "react-icons/pi";

export const Navbar = ({ visible, setVisible }) => {
  console.log({ visible });
  return (
    <div className="flex items-center gap-3 p-3 sticky top-2 rounded-md z-10 shadow-sm   bg-white mx-2 mt-2 shadow-slate-300">
      <FaBars
        onClick={() => setVisible(!visible)}
        className="text-2xl font-thin text-slate-500 cursor-pointer"
      />
      <Input
        type="text"
        placeholder="Search here..."
        labelPlacement="outside"
        className="flex-1 text-slate-600 font-medium border rounded-xl border-slate-200"
      />
      <Avatar
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        className="text-tiny cursor-pointer w-10 h-10"
      />
    </div>
  );
};
