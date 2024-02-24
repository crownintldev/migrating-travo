// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import DataTable from "@/components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "@/store";
import { currencyFormatter, dateFormat } from "@/utils/helperfunction";
import ExpenseForm from "@/components/Forms/expenseForm";
const page = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  useEffect(() => {
    dispatch(fetchExpense({}));
  }, []);
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "price",
      header: () => <div className="text-right">Price</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));
        return (
          <div className="text-right font-medium">
            {currencyFormatter(amount)}
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => (
        <div className="capitalize">
          {dateFormat(row.getValue("createdAt"))}
        </div>
      ),
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => (
        <div className="capitalize">
          {dateFormat(row.getValue("updatedAt"))}
        </div>
      ),
    },
  ];
  return (
    <div>
      <TopHeader />
      <DataTable
        editForm={ExpenseForm}
        addForm={ExpenseForm}
        addFormTitle="Add Expense"
        editFormTitle="Edit Expense"
        addButtonTitle="Add Expense"
        editButtonTitle="Edit Expense"
        deleteButtonTitle="Delete Expense"
        columns={columns}
        data={expense.data}
      />
    </div>
  );
};

export default page;
