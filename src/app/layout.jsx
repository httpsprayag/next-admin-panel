"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { Navbar, Sidebar } from "../components";
import { isAuthenticated } from "../utils";
import { useState } from "react";

const metadata = {
  title: "Nextjs Admin Panel",
  description: "Admin Panel using nextjs.",
};

const isLoggedin = true;

const RootLayout = ({ children }) => {
  const [visible, setVisible] = useState(true);
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <div className="md:flex w-full h-screen relative">
            <Sidebar visible={visible} />
            <div
              className={` ${
                visible
                  ? "md:left-[250px] h-full md:overflow-y-scroll md:absolute top-0 right-0"
                  : "left-0 w-full absolute"
              }`}
            >
              <Navbar visible={visible} setVisible={setVisible} />
              {children}
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
