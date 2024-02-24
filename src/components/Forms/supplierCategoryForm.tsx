//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fetchExpenseCategory, fetchExpenseType } from "@/store";
import { useDispatch } from "react-redux";
import { findDataByIndex, setFormInputValues } from "@/utils/helperfunction";
import { supplierCategory } from "@/dummyData";

const SupplierCategoryForm = ({ _id }) => {
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState(null);
  let editId = supplierCategory?.find((item) => item._id === selectedIds);
  useEffect(() => {
    dispatch(fetchExpenseCategory({}));
    dispatch(fetchExpenseType({}));
  }, []);
  const formSchema = z.object({});
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async () => {
    const data = form.getValues();
    console.log("=== data", data);
  };
  useEffect(() => {
    if (editId) {
      setFormInputValues(editId, form);
    } else {
      form.reset();
    }
  }, [form.setValue, editId]);
  useEffect(() => {
    if (_id && _id.length > 0) {
      findDataByIndex(_id, supplierCategory, setSelectedIds);
    }
  }, [_id]);
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Supplier Category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default SupplierCategoryForm;
