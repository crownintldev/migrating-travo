// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import DataTable from "@/components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoice } from "@/store";
import { Checkbox } from "@/components/ui/checkbox";
import { currencyFormatter, dateFormat } from "@/utils/helperfunction";
import Tag from "@/components/Tag";
const page = () => {
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoice);

  useEffect(() => {
    dispatch(
      fetchInvoice({
        limit: 20,
        page: 1,
        sortField: "createdAt",
        sortOrder: -1,
        deleted: false,
      })
    );
  }, []);

  const renderMembers = (data) => {
    if (data && data.length > 0) {
      return data.map((item) => {
        return <Tag text={item} />;
      });
    }
  };
  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="border-slate-50"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "invoiceNumber",
      header: "Invoice Number",
      cell: ({ row }) => <div>{row.getValue("invoiceNumber")}</div>,
    },
    {
      accessorKey: "members",
      header: "Members",
      cell: ({ row }) => (
        <div className="flex items-center flex-wrap gap-2">
          {renderMembers(row.getValue("members"))}
        </div>
      ),
    },
    {
      accessorKey: "Total",
      header: "Total",
      cell: ({ row }) => (
        <div>{currencyFormatter(row.getValue("billing.total"))}</div>
      ),
    },
    {
      accessorKey: "paid",
      header: "Paid",
      cell: ({ row }) => (
        <div>{currencyFormatter(row.getValue("billing.paid"))}</div>
      ),
    },
    {
      accessorKey: "remaining",
      header: "Remaining",
      cell: ({ row }) => (
        <div>{currencyFormatter(row.getValue("billing.remaining"))}</div>
      ),
    },
    {
      accessorKey: "discount",
      header: "Discount",
      cell: ({ row }) => (
        <div>{currencyFormatter(row.getValue("billing.discount"))}</div>
      ),
    },
    {
      accessorKey: "issueDate",
      header: "Issue Date",
      cell: ({ row }) => (
        <div className="capitalize">
          {dateFormat(row.getValue("issueDate"))}
        </div>
      ),
    },
    {
      accessorKey: "dueDate",
      header: "Due Date",
      cell: ({ row }) => (
        <div className="capitalize">{dateFormat(row.getValue("dueDate"))}</div>
      ),
    },
  ];
  console.log("===== invoice =====", invoice);
  return (
    <div>
      <TopHeader />
      <DataTable columns={columns} data={invoice.data} showTopAuction={false} />
    </div>
  );
};

export default page;
