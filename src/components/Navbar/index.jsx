import React from "react";
import {
  Button,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated } from "../../utils";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const path = usePathname();
  const router = useRouter();

  const handleClick = () => router.push("/login");

  const isLoggedin = isAuthenticated();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <div
      className={
        path !== "/login"
          ? `md:container  mx-auto py-4 shadow-slate-600 shadow-md bg-slate-800 md:rounded-lg px-4 w-full sticky md:top-3 bg-opacity-75 backdrop-blur-sm`
          : "py-3 hidden"
      }
    >
      <div className="md:flex items-center gap-3 hidden">
        {navItems?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-slate-200 px-2 md:px-4 font-bold font-mono"
          >
            {item?.name}
          </Link>
        ))}

        {isLoggedin ? (
          <div className="ml-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="text-violet-700 bg-white">
                  My Account
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">My activity</DropdownItem>
                <DropdownItem key="copy">My Purchases</DropdownItem>
                <DropdownItem key="edit">Edit Profile</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  onClick={() => {
                    localStorage.clear();
                    router.push("/login");
                  }}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        ) : (
          <Button
            color="secondary"
            variant="flat"
            className="ml-auto text-violet-600 bg-white"
            onClick={handleClick}
          >
            Signin
          </Button>
        )}
      </div>
      <FaBars
        className="flex md:hidden cursor-pointer text-white text-lg"
        onClick={() => handleOpen()}
      />
      <>
        <Modal
          onClick={() => onOpen()}
          size={"full"}
          isOpen={isOpen}
          className="relative"
          onClose={onClose}
          closeButton={
            <button
              onClick={onClose}
              className="w-max text-black text-2xl cursor-pointer absolute right-10 mr-8 mt-4 px-0 max-w-max"
            >
              <MdClose onClick={onClose} className="text-2xl" />
            </button>
          }
        >
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
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod.
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
    </div>
  );
};
