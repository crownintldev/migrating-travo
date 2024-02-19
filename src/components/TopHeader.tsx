import React from "react";
import { Search } from "./top-menus/search";
import { UserNav } from "./top-menus/user-nav";

type Props = {};

const TopHeader = (props: Props) => {
  return (
    <div className="flex h-16 items-center place-content-between border-b-2 border-gray-300 h-[56px] mb-4 pb-2">
      <Search />
      <div className="flex gap-4">
        <UserNav />
      </div>
    </div>
  );
};

export default TopHeader;
