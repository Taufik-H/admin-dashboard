import { MdViewWeek } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoPieChartSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { SidebarMenuProps } from "./type";
import { MdShoppingCart } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
export const SIDEBAR_MENU_ITEM: SidebarMenuProps[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <RiHome6Fill size={20} />,
  },
  {
    name: "Statistic",
    path: "/statistic",
    icon: <IoPieChartSharp size={20} />,
  },
  {
    name: "Overview",
    path: "/overview",
    icon: <MdViewWeek size={20} />,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <IoMdSettings size={20} />,
  },
];

export const INFO = [
  {
    title: "Total viewes",
    value: "3.456k",
    icon: <IoMdEye size={25} />,
  },
  {
    title: "Total Profit",
    value: "$45,2k",
    icon: <MdShoppingCart />,
  },
  {
    title: "Total product",
    value: "2.450",
    icon: <FaBagShopping />,
  },
  {
    title: "Total Users",
    value: "3.456",
    icon: <FaUserGroup />,
  },
];

export const ACTIVITY = [
  // activity with randome image from unsplash then randome differet name , time, and activity
  {
    image: "avatar.jpg",
    name: "Farhan Mujib",
    activity: "Buy some product with new...",
    time: "10m",
  },
  {
    image: "avatar.jpg",
    name: "Farhan Mujib",
    activity: "Buy some product with new...",
    time: "10m",
  },
  {
    image: "avatar.jpg",
    name: "Farhan Mujib",
    activity: "Buy some product with new...",
    time: "10m",
  },
  {
    image: "avatar.jpg",
    name: "Farhan Mujib",
    activity: "Buy some product with new...",
    time: "10m",
  },
];
