import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegComments } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

export const SidebarItems = [
  { icon: <MdOutlineSpaceDashboard />, name: "Dashboard", href: "/" },
  { icon: <MdContentCopy />, name: "Content", href: "/content" },
  { icon: <MdOutlineAnalytics />, name: "Analytics", href: "/analytics" },
  { icon: <SlLike />, name: "Likes", href: "/likes" },
  { icon: <FaRegComments />, name: "Comments", href: "/comments" },
  { icon: <CiUser />, name: "Profile", href: "/profile" },
]

export const accordionMockData = [
  {
    title: "MongoDB",
    content: "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability.",
  },
  {
    title: "Express.js",
    content: "Express.js is a web application framework for Node.js, designed for building web and mobile applications.",
  },
  {
    title: "React",
    content: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
  },
  {
    title: "Node.js",
    content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for building server-side applications.",
  },
  // Add more objects as needed
];
