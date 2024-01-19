import { Button } from "@nextui-org/react";
import React from "react";
import { FaDollarSign, FaUser } from "react-icons/fa";

export const UserCard = ({ name, profilePicture, age, email }) => {
  return (
    <div className="border border-slate-300 p-4 rounded-md">
      <div className="flex items-center gap-3 p-2">
        <FaUser className="text-slate-500 font-medium text-sm" />
        <p className="text-xl font-mono font-semibold">Prayag</p>
      </div>
      <div className="flex items-center gap-3 p-2">
        <FaDollarSign className="text-slate-500 font-medium text-sm" />
        <p className="text-xl font-mono font-thin">299</p>
      </div>
      <Button color="primary" variant="ghost" className="text-slate-500   ">
        Get Details
      </Button>
    </div>
  );
};
