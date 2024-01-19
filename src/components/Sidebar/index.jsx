"use client";
import React, { useState } from "react";
import { SidebarItems } from "../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export const Sidebar = ({ visible }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => onOpen();
  const handleClose = () => onClose();
  const pathName = usePathname();

  console.log({ pathName });
  return (
    <>
      <div
        className={`${
          !visible
            ? "hidden"
            : "hidden min-w-[240px] absolute top-0 left-0 h-screen bg-opacity-75 z-10 border-r md:flex flex-col"
        } `}
      >
        <p className="w-full text-center my-5 text-4xl text-indigo-500 font-bold pr-5">
          Logo
        </p>
        <Divider className="mt-2" />
        <div className="flex-1 flex flex-col mt-4 gap-1">
          {SidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex relative  items-center gap-2 px-4 py-2 mx-4 transition hover:bg-indigo-300 text-white rounded-xl ${
                item.href === pathName
                  ? "text-indigo-500 font-bold text-xl"
                  : "text-slate-700 text-xl"
              }`}
            >
              {pathName === item.href && (
                <span className="bg-indigo-500 w-[6px] h-[6px] mt-1 rounded-full absolute left-1"></span>
              )}
              <span
                className={`text-2xl ${
                  item.href === pathName
                    ? "text-indigo-500 fill-indigo-500"
                    : "text-slate-500"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-lg ${
                  item.href === pathName ? "text-indigo-500" : "text-slate-500"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <Button
          className="mx-3 mb-4 bg-indigo-500 ring-pink-400 ring-2 ring-inset"
          color="primary"
          variant="solid"
          onClick={handleOpen}
        >
          Sign out
        </Button>
      </div>
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
