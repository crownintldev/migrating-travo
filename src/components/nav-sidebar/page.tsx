// Next Imports
import Link from "next/link";

// React Imports
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

// Shadcn Imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Normal Imports
import ChildMenus from "./child-sidebar";
import mainNavLinks from "./main-menu-items";
import { homeItems } from "./child-menu-items";

type Props = {};

const MainMenu = (props: Props) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedChild, setSelectedChild] = useState(null);

  // Function to handle menu item click and update the selected title
  const handleMenuItemClick = (
    title: string,
    child: any,
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    setSelectedTitle(title);
    setSelectedChild(child);

  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-blue-600 dark:bg-gray-900 dark:border-gray-700 border-l-1">
        <Link href="/">
          <Avatar>
            <AvatarImage
              src="https://travokey.up.railway.app/images/favicon.svg"
              className="h-14 pb-4"
            />
            <AvatarFallback>crown logo</AvatarFallback>
          </Avatar>
        </Link>
        {mainNavLinks.map((item) => (
          <div
            key={item.title}
            onClick={(event) =>
              handleMenuItemClick(item.title, item.child, event)
            } // Pass the event
          >
            <Tooltip
              id={item.title}
              place="right"
              //   effect="solid"
              key={item.title}
              className="z-50 transition-opacity duration-300 opacity-0 hover:opacity-100 "
            />
            <Link
              href="/"
              data-tooltip-id={item.title}
              data-tooltip-content={item.title}
            >
              <div
                className={`text-gray-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-10 ${
                  location.pathname === item.path ? "text-blue-500" : ""
                }`}
                // data-tip={item.tooltip}
                // data-for={item.title}
              >
                {/* {item.icon} */}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <ChildMenus menuItems={selectedChild ? selectedChild : mainNavLinks} />
    </div>
  );
};

export default MainMenu;
