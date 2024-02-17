/** @format */

import { cn } from "@/lib/utils";
import React from "react";
import TopHeader from "./TopHeader";
// import Page from "./top-menus/Page";

type Props = {
  title: string;
  className?: string;
};

export default function PageTitle({ className }: Props) {
  return (
    <>
      {/* <Page /> */}
      <h1 className={cn("text-2xl font-semibold", className)}>
      <TopHeader />
        </h1>
    </>
  );
}
