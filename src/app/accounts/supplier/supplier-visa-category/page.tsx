// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import DataTable from "@/components/DataTable";
import AddForm from "./components/SupplierForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "@/store";
import { dateFormat } from "@/utils/helperfunction";
import { supplierCategory } from "@/dummyData";
import SupplierCategoryForm from "@/components/Forms/supplierCategoryForm";
const page = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  useEffect(() => {
    dispatch(fetchExpense({}));
  }, []);
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Category",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => <div>{dateFormat(row.getValue("createdAt"))}</div>,
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: ({ row }) => <div>{dateFormat(row.getValue("updatedAt"))}</div>,
    },
  ];
  return (
    <div>
      <TopHeader />
      <DataTable
        addForm={SupplierCategoryForm}
        editForm={SupplierCategoryForm}
        addFormTitle="Add Supplier Category"
        addButtonTitle="Add Supplier Category"
        editButtonTitle="Edit Supplier Category"
        editFormTitle="Edit Supplier Category"
        headerTitle="Add Supplier Category"
        columns={columns}
        data={supplierCategory}
      />
    </div>
  );
};

export default page;
