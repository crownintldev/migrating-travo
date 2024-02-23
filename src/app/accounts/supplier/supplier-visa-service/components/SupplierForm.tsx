//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { fetchExpenseCategory, fetchExpenseType } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { createApi } from "@/action/function";
import AddCategory from "@/components/CommonForms/AddCategory";
const SupplierForm = () => {
  const [showCategoryDraw, setShowCategoryDraw] = useState(false);
  const dispatch = useDispatch();
  const expenseCategory = useSelector((state) => state.expenseCategory);
  const expenseType = useSelector((state) => state.expenseType);
  const expense = useSelector((state) => state.expense);
  useEffect(() => {
    dispatch(fetchExpenseCategory({}));
    dispatch(fetchExpenseType({}));
  }, []);
  const formSchema = z.object({
    title: z.string().min(1, { message: "required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async () => {
    const data = form.getValues();
    await createApi({
      api: "expense",
      dispatch,
      data,
      reset: form.resetField(),
      fetchData: expense,
    });
  };

  const renderCategorySelectItems = () => {
    if (
      expenseCategory &&
      expenseCategory.data &&
      expenseCategory.data.length > 0
    ) {
      return expenseCategory.data.map((item) => {
        return <SelectItem value={item._id}>{item.name}</SelectItem>;
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <span
            onClick={() => setShowCategoryDraw(true)}
            className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
          >
            <span className="font-bold text-blue-600">
              Add Supplier Category
            </span>
          </span>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mt-1">
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>{renderCategorySelectItems()}</SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <PhoneInput
                    country={"pk"}
                    inputStyle={{ width: "100%" }}
                    containerStyle={{ width: "100%" }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Description " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <AddCategory
        fieldLabel="Supplier Category Name"
        placeholder="Enter Supplier Category Name"
        title="Add Supplier"
        setSheetOpen={setShowCategoryDraw}
        sheetOpen={showCategoryDraw}
      />
    </div>
  );
};

export default SupplierForm;
