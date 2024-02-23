// @ts-nocheck
"use client";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
type ChildMenusProps = {
  menuItems: Array<{ title: string; children?: Array<any> }>;
};

const ChildMenus: React.FC<ChildMenusProps> = ({ menuItems }) => {
  const renderMenus = () => {
    const renderChildrenContent = (data: []) => {
      return data.map((childItem: any) => {
        return (
          <Link href={childItem.path} className="flex items-center gap-3">
            <span>{childItem.icon}</span>
            <span>{childItem.title}</span>
          </Link>
        );
      });
    };
    return menuItems.map((item, index) => {
      if (item && item.children && item.children.length > 0) {
        return (
          <Accordion type="single" collapsible className="w-full border-b-0">
            <AccordionItem className="border-b-0" value={`item-${index}`}>
              <AccordionTrigger className="py-2">{item.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-1">
                {renderChildrenContent(item.children)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <div className="flex items-center gap-2 mt-2">
            <span className="flex w-5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <Link href={item.path}>{item.title}</Link>
          </div>
        );
      }
    });
  };
  return (
    <div className="h-[100vh] flex  flex-col w-[250px] bg-white p-3">
      {renderMenus()}
    </div>
  );
};

export default ChildMenus;
