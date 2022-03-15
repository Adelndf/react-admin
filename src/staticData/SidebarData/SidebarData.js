import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const SidebarData = [
  {
    name: "dashbaord",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    name: "users",
    icon: <GroupIcon />,
    link: "/users",
  },
  {
    name: "products",
    icon: <StoreIcon />,
    link: "/products",
  },
  {
    name: "orders",
    icon: <CreditCardIcon />,
    link: "/",
  },
  {
    name: "delivery",
    icon: <LocalShippingIcon />,
    link: "/",
  },
  {
    name: "stats",
    icon: <QueryStatsIcon />,
    link: "/",
  },
  {
    name: "notifications",
    icon: <NotificationsIcon />,
    link: "/",
  },
  {
    name: "system health",
    icon: <LocalHospitalIcon />,
    link: "/",
  },
  {
    name: "logs",
    icon: <PsychologyOutlinedIcon />,
    link: "/",
  },
  {
    name: "settings",
    icon: <SettingsApplicationsIcon />,
    link: "/",
  },
  {
    name: "profile",
    icon: <AccountCircleOutlinedIcon />,
    link: "/users/randomId123",
  },
  {
    name: "logout",
    icon: <LogoutIcon />,
    link: "/",
  },
];

export default SidebarData;
