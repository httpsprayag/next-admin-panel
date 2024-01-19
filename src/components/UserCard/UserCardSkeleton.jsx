import React from "react";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export const UserCardSkeleton = ({ name, profilePicture, age, email }) => {
  return (
    <div className="border border-slate-300 p-4 rounded-md animate-pulse">
      <div className="flex items-center gap-3 p-2 min-h-16 w-full">
        <FaUser className="text-indigo-500 font-medium text-sm" />
        <div className="w-full h-5 bg-gray-300 rounded"></div>
      </div>
      <div className="flex items-center gap-3 p-2 min-h-8 w-full">
        <FaDollarSign className="text-indigo-500 font-medium text-sm" />
        <div className="w-full h-5 bg-gray-300 rounded"></div>
      </div>
      <Button color="primary" variant="shadow" disabled>
        Loading...
      </Button>
    </div>
  );
};
