"use client";

import {
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Badge,
  Avatar,
  Breadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/react";
import { useRef, useState } from "react";
import axios from "axios";
import { UserCard, UserCardSkeleton } from "../components";
import { SiSpeedtest } from "react-icons/si";
import { SlLike } from "react-icons/sl";
import { PiShareFatBold, PiWechatLogo } from "react-icons/pi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaQuestion } from "react-icons/fa";
import { accordionMockData } from "../constants";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const { data } = await axios.get("/api/users");
    setUsers(data?.users);
    console.log({ data });
    setLoading(false);
  };

  console.log({ users });

  return (
    <div className="relative w-full px-5">
      <div className="w-[380px] h-60 absolute md:left-2/3 bg-indigo-200  blur-3xl opacity-40 rounded-full z-0"></div>
      <div className="mt-4">
        <div className="flex items-center gap-3">
          <SiSpeedtest className="text-white p-1 box-content rounded-lg bg-indigo-500 text-xl font-bold" />
          <p className="text-black font-medium text-lg">Dashboard</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-4 z-10">
          <div className="p-4 rounded-lg grid place-items-center gap-4 bg-sky-200 shadow-lg shadow-indigo-200">
            <SlLike className="text-2xl" />
            <p className="text-lg">Total Likes</p>
            <p className="font-medium text-3xl">50,120</p>
          </div>
          <div className="p-4 rounded-lg grid place-items-center gap-4  bg-[#F0E0D1] shadow-lg shadow-indigo-200">
            <PiWechatLogo className="text-2xl" />
            <p className="text-lg">Comments</p>
            <p className="font-medium text-3xl">25,120</p>
          </div>
          <div className="p-4 rounded-lg grid place-items-center gap-4 bg-pink-300 shadow-lg shadow-indigo-200">
            <PiShareFatBold className="text-2xl" />
            <p className="text-lg">Total Shares</p>
            <p className="font-medium text-3xl">50,120</p>
          </div>
          <div className="p-4 rounded-lg grid place-items-center gap-4 bg-orange-300 shadow-lg shadow-indigo-200">
            <MdOutlineNotificationsActive className="text-2xl" />
            <p className="text-lg">Subscribers</p>
            <p className="font-medium text-3xl">50,120</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-3">
            <FaQuestion className="text-white p-1 box-content rounded-lg bg-indigo-500 text-xl font-bold" />
            <p className="text-black font-medium text-lg">FAQ's</p>
          </div>
          <Accordion variant="splitted" className="mt-8">
            {accordionMockData?.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={item.title}
                title={item.title}
              >
                <div className="p-3 border-t-slate-400">
                  <p>{item.content}</p>
                </div>
              </AccordionItem>
            ))}
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              <div className="p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laboriosam consequuntur beatae incidunt assumenda rem
                  suscipit, quibusdam, aut ratione aliquam accusantium laborum
                  magni voluptatem non.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              <div className="p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laboriosam consequuntur beatae incidunt assumenda rem
                  suscipit, quibusdam, aut ratione aliquam accusantium laborum
                  magni voluptatem non.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              <div className="p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laboriosam consequuntur beatae incidunt assumenda rem
                  suscipit, quibusdam, aut ratione aliquam accusantium laborum
                  magni voluptatem non.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <SlCalender className="text-white p-1 box-content rounded-lg bg-indigo-500 text-xl font-bold" />
          <p className="text-black font-medium text-lg">Recent Activities</p>
        </div>
        <Table
          className="mt-8"
          isStriped
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex mt-8 gap-3 items-center">
          <Badge content="5" size="sm" color="primary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
          <Badge content="5" size="md" color="primary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
            />
          </Badge>
          <Badge content="5" size="lg" color="primary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </Badge>
        </div>
        <Breadcrumbs className="mt-5">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="h-screen grid place-items-center">Div</div>
      <div className="h-screen grid place-items-center">Div</div>
      <div className="h-screen grid place-items-center">Div</div>
      <div className="h-screen grid place-items-center">Div</div>
    </div>
  );
};

export default Home;
