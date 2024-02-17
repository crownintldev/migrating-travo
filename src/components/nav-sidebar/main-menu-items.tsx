// Lucide Icons Imports

import {
  Settings,
  Home,
  TrendingUp,
  Plane,
  Route,
  BedDouble,
  Wrench,
  Database,
} from "lucide-react";

// Child Menus Imports
import {
  accountItems,
  automationItems,
  databaseItems,
  homeItems,
  hotelItems,
  settingsItems,
  ticketingItems,
  tourItems,
} from "./child-menu-items";

const mainNavLinks = [
  {
    title: "home",
    path: "/",
    icon: <Home />,
    tooltip: "Accounts",
    activeChildPath: "/dashboards/analytics",
    child: homeItems,
  },
  {
    title: "Accounts",
    path: "/users",
    icon: <TrendingUp />,
    tooltip: "Accounts",
    activeChildPath: "/dashboards/analytics",
    child: accountItems(),
  },
  {
    title: "Tickets",
    path: "/orders",
    icon: <Plane />,
    tooltip: "Tickets",
    activeChildPath: "/welcome",
    child: ticketingItems(),
  },
  {
    title: "Tour",
    path: "/settings",
    icon: <Route />,
    tooltip: "Tours",
    activeChildPath: "/coming-soon",
    child: tourItems(),
  },
  {
    title: "Hotel",
    path: "/users",
    icon: <BedDouble />,
    tooltip: "Hotels",
    activeChildPath: "/coming-soon",
    child: hotelItems(),
  },
  {
    title: "Automation Tools",
    path: "/settings",
    icon: <Wrench />,
    tooltip: "Automation Tools",
    activeChildPath: "/coming-soon",
    child: automationItems(),
  },
  {
    title: "Database",
    path: "/users",
    icon: <Database />,
    tooltip: "Database",
    activeChildPath: "/coming-soon",
    child: databaseItems(),
  },
  {
    title: "settings",
    path: "/settings",
    icon: <Settings />,
    tooltip: "Settings",
    activeChildPath: "/coming-soon",
    child: settingsItems(),
  },
];

export default mainNavLinks;
