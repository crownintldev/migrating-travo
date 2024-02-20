"use client";

// Shadcn Imports
import DataTable from "@/components/DataTable";
import TopHeader from "@/components/TopHeader";

// Redux Imports
import { fetchExpense } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Expense() {

  const expense = useSelector((state: any) => state.expense.data)
  console.log(expense)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpense({}));
  }, []);

  const actionLists = ["create", "update", "delete"];

  return (
    <div className="w-full">
      <TopHeader />
      <DataTable actions={actionLists} />
    </div>
  );
}
