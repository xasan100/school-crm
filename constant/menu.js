import { LuLayoutDashboard } from "react-icons/lu";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {
  PiStudent,
  PiUsersThree,
  PiChartLineUp,
  PiNoteDuotone,
} from "react-icons/pi";
import { TbReport, TbReportMoney } from "react-icons/tb";
import { BsDoorOpen, BsHouseAdd, BsPersonAdd } from "react-icons/bs";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <LuLayoutDashboard />,
    children: [
      {
        id: 1,
        title: "Analiytics",
        link: "/analiytics",
        icon: <PiChartLineUp />,
      },
      {
        id: 2,
        title: "O'quvchilar",
        link: "/students-report",
        icon: <PiStudent />,
      },
    ],
  },
  {
    id: 2,
    title: "O'qituvchilar",
    icon: <LiaChalkboardTeacherSolid />,
    children: [
      {
        id: 1,
        title: "O'qtuvchi qo'shish",
        link: "/add-teacher",
        icon: <BsPersonAdd />,
      },
      {
        id: 2,
        title: "O'qtuvchilar ro'yxati",
        link: "/teachers-table",
        icon: <PiNoteDuotone />,
      },
      {
        id: 3,
        title: "O'qtuvchilar maoshi",
        link: "/teachers-salary",
        icon: <TbReportMoney />,
      },
    ],
  },
  {
    id: 3,
    title: "O'quvchilar",
    icon: <PiStudent />,
    children: [
      {
        id: 1,
        title: "O'quvchi qo'shish",
        link: "/add-student",
        icon: <BsPersonAdd />,
      },
      {
        id: 2,
        title: "O'quvchilar ro'yxati",
        link: "/students-table",
        icon: <PiNoteDuotone />,
      },
    ],
  },
  {
    id: 4,
    title: "Hisobot",
    icon: <TbReport />,
    children: [
      {
        id: 1,
        title: "Kirim",
        link: "/income",
        icon: <GiReceiveMoney />,
      },
      {
        id: 2,
        title: "Chiqim",
        link: "/expense",
        icon: <GiPayMoney />,
      },
    ],
  },
  {
    id: 5,
    title: "Xodimlar",
    icon: <PiUsersThree />,
    children: [
      {
        id: 1,
        title: "Xodim qo'shish",
        link: "/add-staff",
        icon: <BsPersonAdd />,
      },
      {
        id: 2,
        title: "Xodimlar ro'yxati",
        link: "/staffs-table",
        icon: <PiNoteDuotone />,
      },
    ],
  },
  {
    id: 6,
    title: "Xonalar",
    icon: <BsDoorOpen />,
    children: [
      {
        id: 1,
        title: "Xona qo'shish",
        link: "/add-room",
        icon: <BsHouseAdd />,
      },
      {
        id: 2,
        title: "Xonalar ro'yxati",
        link: "/rooms-table",
        icon: <PiNoteDuotone />,
      },
    ],
  },
];
export default menuItems