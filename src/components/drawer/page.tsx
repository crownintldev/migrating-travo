// @ts-nocheck
"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export function GlobalSheet({
  DrawerForm,
  DrawerTitle,
  buttonTitle,
  deleteButtonTitle,
  formWidth,
  _id,
}) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const renderTrigger = () => {
    if ((_id && _id.length === 0) || (_id && _id.length === 1)) {
      return (
        <SheetTrigger asChild>
          <span
            onClick={() => toggle()}
            className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
          >
            {buttonTitle}
          </span>
        </SheetTrigger>
      );
    }
  };

  return (
    <Sheet>
      {renderTrigger()}
      {_id && _id.length > 0 && (
        <span
          onClick={() => toggle()}
          className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
        >
          {deleteButtonTitle}
        </span>
      )}
      <SheetContent
        className={`overflow-x-hidden overflow-y-auto`}
        style={{ maxWidth: formWidth }}
        side={"right"}
      >
        <SheetHeader className="mb-4">
          <SheetTitle>{DrawerTitle}</SheetTitle>
        </SheetHeader>
        {DrawerForm && <DrawerForm _id={_id} toggle={toggle} />}
      </SheetContent>
    </Sheet>
  );
}
