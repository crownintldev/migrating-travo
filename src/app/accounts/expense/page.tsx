// @ts-nocheck
"use client";

// // Shadcn Imports
// import DataTable from "@/components/DataTable";

// // Redux Imports
// import { fetchExpense } from "@/store";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// export default function Expense() {

//   const expense = useSelector((state: any) => state.expense.data)
//   console.log(expense)
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchExpense({}));
//   }, []);

//   const actionLists = ["create", "update", "delete"];

//   return (
//     <div className="w-full">
//       <TopHeader />
//       <h1>expense page</h1>
//       <DataTable actions={actionLists} />
//     </div>
//   );
// }

import React, { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import DataTable from "@/components/DataTable";
import AddForm from "./components/AddForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "@/store";
const page = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  const actionLists = ["create", "update", "delete"];
  useEffect(() => {
    dispatch(fetchExpense({}));
  }, []);
  return (
    <div>
      <TopHeader />
      <DataTable
        actions={actionLists}
        addForm={<AddForm />}
        headerTitle="Add Expense"
      />
    </div>
  );
};

export default page;
