"use client";

// Shadcn Imports
import DataTable from "@/components/DataTable";
import TopHeader from "@/components/TopHeader";

// Redux Imports
import { fetchExpense } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function VisaServices() {

  const actionLists = ["create", "update", "delete"];

  return (
    <div className="w-full">
      <TopHeader />
      <h1>VisaServices page</h1>
      <DataTable actions={actionLists} />
    </div>
  );
}
