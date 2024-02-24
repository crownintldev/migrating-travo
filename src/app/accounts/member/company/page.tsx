//@ts-nocheck
"use client";

// Shadcn Imports
import React, { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import DataTable from "@/components/DataTable";
import AddForm from "./components/CompanyForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "@/store";
import { Checkbox } from "@/components/ui/checkbox";
import { currencyFormatter, dateFormat } from "@/utils/helperfunction";
import CompanyForm from "@/components/Forms/companyForm";

export default function Agent() { 
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
    <div className="w-full">
      <TopHeader />
      <DataTable
      
        addForm={CompanyForm}
        editForm={CompanyForm}
        editButtonTitle='Edit Company'
        addButtonTitle='Add Company'
        addFormTitle='Add Company'
        editFormTitle='Edit Company'
        columns={columns}
        data={expense.data}
      />
    </div>
  );
}
