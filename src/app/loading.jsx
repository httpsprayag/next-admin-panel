import React from "react";
import { Spinner } from "@nextui-org/react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full place-items-center">
      <Spinner label="Loading..." color="primary" />
    </div>
  );  
};

export default LoadingPage;
