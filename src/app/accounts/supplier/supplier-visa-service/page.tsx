// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import DataTable from "@/components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplier } from "@/store";
import { dateFormat } from "@/utils/helperfunction";
import SupplierForm from "@/components/Forms/supplierForm";
import { supplierData } from "@/dummyData";
const page = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  useEffect(() => {
    dispatch(fetchSupplier({}));
  }, []);
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <div>{row.getValue("orderId")}</div>,
    },
    {
      accessorKey: "name",
      header: () => <div className="text-right">Name</div>,
      cell: ({ row }) => {
        return <div className="capitalize">{row.getValue("name")}</div>;
      },
    },
    {
      accessorKey: "categoryName",
      header: "Category",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("categoryName")}</div>
      ),
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone",
      cell: ({ row }) => <div>{row.getValue("phoneNumber")}</div>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <div>{row.getValue("description")}</div>,
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
        addForm={SupplierForm}
        editForm={SupplierForm}
        columns={columns}
        data={supplierData}
        addFormTitle="Add Supplier Visa Service"
        editFormTitle="Edit Supplier Visa Service"
        addButtonTitle="Add Supplier Visa Service"
        editButtonTitle="Edit Supplier Visa Service"
      />
    </div>
  );
};

export default page;
