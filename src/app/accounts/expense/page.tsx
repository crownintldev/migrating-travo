"use client"

import DataTable from "@/components/DataTable"
import PageTitle from "@/components/PageTitle"

export default function Expense() {

  const actionLists = [
    "add",
    "edit",
    "delete"
  ]
  return (
    <div className="w-full">
        <PageTitle />
        <DataTable actions={actionLists} /> 
    </div>
  )
}
