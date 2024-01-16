"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { Navbar } from "../components";
import { isAuthenticated } from "../utils";

const metadata = {
  title: "Nextjs Admin Panel",
  description: "Admin Panel using nextjs.",
};

const isLoggedin = true;

const RootLayout = ({ children }) => {
  const isLoggedIn = isAuthenticated();
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          {isLoggedIn && <Navbar />}
          <div className={isLoggedIn ? "mt-2 md:mt-6" : ""}>{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
