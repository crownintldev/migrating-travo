import { Home } from "lucide-react";
const mainNavLinks = [
  {
    title: "Dashboard",
    icon: <Home />,
    tooltip: "Dashboard",
    children: [
      {
        title: "Main",
        icon: "",
        path: "dashboard/main",
      },
    ],
  },
  {
    title: "Members",
    icon: <Home />,
    tooltip: "Members",
    children: [
      {
        title: "Agent",
        icon: "",
        path: "dashboard/main",
      },
      {
        title: "Clients",
        icon: "",
        path: "dashboard/main",
      },
      {
        title: "Company",
        icon: "",
        path: "dashboard/main",
      },
    ],
  },
  {
    title: "Booking",
    icon: <Home />,
    tooltip: "Booking",
    children: [
      {
        title: "Visa Booking",
        icon: "",
        path: "dashboard/main",
      },
    ],
  },
  {
    title: "Services",
    icon: <Home />,
    tooltip: "Services",
    children: [
      {
        title: "Visa Services Rate",
        icon: "",
        path: "dashboard/main",
      },
      {
        title: "Supplier Category",
        icon: "",
        path: "dashboard/main",
      },
      {
        title: "Supplier List",
        icon: "",
        path: "dashboard/main",
      },
    ],
  },
  {
    title: "Services",
    icon: <Home />,
    tooltip: "Services",
    children: [
      {
        title: "Visa Services Rate",
        icon: "",
        path: "dashboard/main",
      },
      {
        title: "Supplier Category",
        icon: "",
        path: "dashboard/main",
      },
      {
        title: "Supplier List",
        icon: "",
        path: "dashboard/main",
      },
    ],
  },
  {
    title: "Account",
    icon: <Home />,
    tooltip: "Account",
    path:'#'
  },
  {
    title: "Expense",
    icon: <Home />,
    path:"/accounts/expense",
    tooltip: "expense",
  },
  {
    title: "Invoice",
    icon: <Home />,
    tooltip: "invoice",
    path:'#'
  },
];

export default mainNavLinks;
