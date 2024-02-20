"use client";

import React from "react";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

export default function BookingPassport({}: Props) {
  return (
    <>
      <div className="flex flex-col gap-5  w-full">
        <h1> BookingPassport page</h1>
      </div>
    </>
  );
}
