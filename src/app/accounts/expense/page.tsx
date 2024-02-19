"use client"

import DataTable from "@/components/DataTable"

export default function Expense() {

  const actionLists = [
    "create"
  ]
  return (
    <div className="w-full">
        <DataTable actions={actionLists} /> 
    </div>
  )
}
