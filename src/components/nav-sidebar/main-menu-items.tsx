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
        path: "/accounts/member/agent",
      },
      {
        title: "Clients",
        icon: "",
        path: "/accounts/member/client",
      },
      {
        title: "Company",
        icon: "",
        path: "/accounts/member/company",
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
        path: "/accounts/booking/visa",
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
        path: "/accounts/services/visa",
      },
      {
        title: "Supplier Category",
        icon: "",
        path: "/accounts/supplier/supplier-visa-category",
      },
      {
        title: "Supplier List",
        icon: "",
        path: "/accounts/supplier/supplier-visa-service",
      },
    ],
  },
  {
    title: "Account",
    icon: <Home />,
    tooltip: "Account",
    path: "#",
  },
  {
    title: "Expense",
    icon: <Home />,
    path: "/accounts/expense",
    tooltip: "expense",
  },
  {
    title: "Invoice",
    icon: <Home />,
    tooltip: "invoice",
    children: [
      {
        title: "List",
        icon: "",
        path: "/accounts/invoice/list/",
      },
      {
        title: "Add",
        icon: "",
        path: "/accounts/invoice/add/",
      },
    ],
  },
];

export default mainNavLinks;
