//@ts-nocheck
"use client";

import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  FormDescription,
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
import AddCategory from "./AddCategory";
import AddType from "./AddType";
import { fetchExpenseCategory, fetchExpenseType } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { createApi } from "@/action/function";
const AddForm = () => {
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
  const renderTypeSelectItems = () => {
    if (expenseType && expenseType.data && expenseType.data.length > 0) {
      return expenseType.data.map((item) => {
        return <SelectItem value={item._id}>{item.name}</SelectItem>;
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AddCategory />
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
          <AddType />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>{renderTypeSelectItems()}</SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="shadcn" {...field} />
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

export default AddForm;
