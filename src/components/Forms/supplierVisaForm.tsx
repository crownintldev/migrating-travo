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
import AddCategory from "@/components/CommonForms/AddCategory";
import AddType from "@/components/CommonForms/AddType";
import AddVisaDestination from "@/components/CommonForms/AddVisaDestination";
import AddSupplier from "@/components/CommonForms/AddSupplier";
import AddVisaDuration from "@/components/CommonForms/AddVisaDuration";
import { findDataByIndex, setFormInputValues } from "@/utils/helperfunction";

const SupplierVisaForm = ({ _id }) => {
  const dispatch = useDispatch();
  const expenseCategory = useSelector((state) => state.expenseCategory);
  const [showCategoryDraw, setShowCategoryDraw] = useState(false);
  const [showTypeDraw, setShowTypeDraw] = useState(false);
  const [showDestinationDraw, setShowDestinationDraw] = useState(false);
  const [showDurationDraw, setShowDurationDraw] = useState(false);
  const [showSupplerDraw, setShowSupplerDraw] = useState(false);
  const expense = useSelector((state) => state.expense);
  const [selectedIds, setSelectedIds] = useState(null);
  let editId = []?.find((item) => item._id === selectedIds);
  useEffect(() => {
    dispatch(fetchExpenseCategory({}));
    dispatch(fetchExpenseType({}));
  }, []);
  const formSchema = z.object({
    // title: z.string().min(1, { message: "required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // title: "",
    },
  });

  const onSubmit = async () => {
    const data = form.getValues();
    console.log("==== data =====", data);
    // await createApi({
    //   api: "expense",
    //   dispatch,
    //   data,
    //   reset: form.resetField(),
    //   fetchData: expense,
    // });
  };

  const renderSelectItems = ({ data, valueKey, nameKey }) => {
    if (data && data.length > 0) {
      return data.map((item) => {
        return <SelectItem value={item[valueKey]}>{item[nameKey]}</SelectItem>;
      });
    }
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
      findDataByIndex(_id, [], setSelectedIds);
    }
  }, [_id]);
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
                  <SelectContent>
                    {renderSelectItems(expenseCategory.data, "_id", "name")}
                  </SelectContent>
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
              <FormItem className="mt-1">
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {renderSelectItems(expenseCategory.data, "_id", "name")}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <span
            onClick={() => setShowDurationDraw(true)}
            className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
          >
            <span className="font-bold text-blue-600">Add Visa Duration</span>
          </span>
          <FormField
            control={form.control}
            name="visaDuration"
            render={({ field }) => (
              <FormItem className="mt-1">
                <FormLabel>Visa Duration</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Visa Duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {renderSelectItems(expenseCategory.data, "_id", "name")}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <span
            onClick={() => setShowDestinationDraw(true)}
            className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
          >
            <span className="font-bold text-blue-600">
              Add Visa Destination
            </span>
          </span>
          <FormField
            control={form.control}
            name="visaDestination"
            render={({ field }) => (
              <FormItem className="mt-1">
                <FormLabel>Visa Destination</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Visa Destination" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {renderSelectItems(expenseCategory.data, "_id", "name")}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <span
            onClick={() => setShowSupplerDraw(true)}
            className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
          >
            <span className="font-bold text-blue-600">Add Visa Supplier</span>
          </span>
          <FormField
            control={form.control}
            name="visaSupplier"
            render={({ field }) => (
              <FormItem className="mt-1">
                <FormLabel>Supplier</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Supplier" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {renderSelectItems(expenseCategory.data, "_id", "name")}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmed - Total Fee</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter Total Fee"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="processingFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Processing - Processing Fee</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter Processing Fee"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="visaFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Processing - Visa Fee</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter Visa Fee"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <AddCategory
        placeholder={"Enter Visa Category"}
        title={"Add Visa Category Form"}
        buttonName={"Add Visa Category"}
        fieldLabel={"Visa Category"}
        setSheetOpen={setShowCategoryDraw}
        sheetOpen={showCategoryDraw}
      />
      <AddVisaDestination
        placeholder={"Enter Visa Destination"}
        title={"Add Visa Destination Form"}
        buttonName={"Add Visa Destination"}
        fieldLabel={"Visa Destination"}
        setSheetOpen={setShowDestinationDraw}
        sheetOpen={showDestinationDraw}
      />
      <AddType
        placeholder={"Enter Visa Type"}
        title={"Add Visa Type Form"}
        buttonName={"Add Visa Type"}
        fieldLabel={"Visa Type"}
        setSheetOpen={setShowTypeDraw}
        sheetOpen={showTypeDraw}
      />
      <AddVisaDuration
        placeholder={"Enter Visa Duration"}
        title={"Add Visa Duration Form"}
        buttonName={"Add Visa Duration"}
        fieldLabel={"Visa Duration"}
        setSheetOpen={setShowDurationDraw}
        sheetOpen={showDurationDraw}
      />
      <AddSupplier
        placeholder={"Enter Supplier"}
        title={"Add Supplier Form"}
        buttonName={"Add Supplier"}
        fieldLabel={"Supplier"}
        setSheetOpen={setShowSupplerDraw}
        sheetOpen={showSupplerDraw}
      />
    </div>
  );
};

export default SupplierVisaForm;
