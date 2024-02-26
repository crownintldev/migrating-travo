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
import AddType from "@/components/CommonForms/AddType";
import { findDataByIndex, setFormInputValues } from "@/utils/helperfunction";
const ExpenseForm = ({ _id }) => {
  console.log("====_id====", _id);
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState(null);
  const [showCategoryDraw, setShowCategoryDraw] = useState(false);
  const [showTypeDraw, setShowTypeDraw] = useState(false);
  const expenseCategory = useSelector((state) => state.expenseCategory);
  const expenseType = useSelector((state) => state.expenseType);
  const expense = useSelector((state) => state.expense);
  let editId = expense?.data?.find((item) => item._id === selectedIds);

  const formSchema = z.object({
    // title: z.string().min(1, { message: "required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   title: "",
    },
  });

  useEffect(() => {
    dispatch(fetchExpenseCategory({}));
    dispatch(fetchExpenseType({}));
  }, []);
  useEffect(() => {
    if (editId) {
      setFormInputValues(editId, form);
    } else {
      form.reset();
    }
  }, [form.setValue, editId]);
  useEffect(() => {
    if (_id && _id.length > 0) {
      findDataByIndex(_id, expense.data, setSelectedIds);
    }
  }, [_id]);
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <span
            onClick={() => setShowCategoryDraw(true)}
            className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
          >
            <span className="font-bold text-blue-600">Add Category</span>
          </span>
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
          <span
            onClick={() => setShowTypeDraw(true)}
            className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
          >
            <span className="font-bold text-blue-600">Add Type</span>
          </span>
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
      <AddCategory
        fieldLabel="Expense Category Name"
        placeholder="Select Expense Category Name"
        title="Add Category Form"
        setSheetOpen={setShowCategoryDraw}
        sheetOpen={showCategoryDraw}
      />
      <AddType
        fieldLabel="Expense Category Name"
        placeholder="Select Expense Category Name"
        title="Add Category Form"
        setSheetOpen={setShowTypeDraw}
        sheetOpen={showTypeDraw}
      />
    </div>
  );
};

export default ExpenseForm;
