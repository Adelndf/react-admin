import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const WidgetData = [
  {
    type: "user",
    title: "users",
    isMoney: false,
    link: "see all users",
    icon: (
      <PeopleAltOutlinedIcon
        className="icon"
        style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
      />
    ),
  },
  {
    type: "order",
    title: "orders",
    isMoney: false,
    link: "view all orders",
    icon: (
      <ShoppingCartOutlinedIcon
        className="icon"
        style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }}
      />
    ),
  },
  {
    type: "earning",
    title: "earnings",
    isMoney: true,
    link: "view net eranings",
    icon: (
      <MonetizationOnOutlinedIcon
        className="icon"
        style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
      />
    ),
  },
  {
    type: "blance",
    title: "blance",
    isMoney: true,
    link: "see more blance",
    icon: (
      <AccountBalanceWalletOutlinedIcon
        className="icon"
        style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
      />
    ),
  },
];

export default WidgetData;
