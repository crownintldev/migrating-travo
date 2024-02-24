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
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import { findDataByIndex, setFormInputValues } from "@/utils/helperfunction";

const CompanyForm = ({ _id }) => {
  const dispatch = useDispatch();
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
    console.log("=== data ====", data);
    // await createApi({
    //   api: "expense",
    //   dispatch,
    //   data,
    //   reset: form.resetField(),
    //   fetchData: expense,
    // });
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
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Company Name" {...field} />
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
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    country={"pk"}
                    inputStyle={{ width: "100%" }}
                    containerStyle={{ width: "100%" }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="licenseNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License #</FormLabel>
                <FormControl>
                  <Input placeholder="Enter License Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ownerContactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner Contact Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    country={"pk"}
                    inputStyle={{ width: "100%" }}
                    containerStyle={{ width: "100%" }}
                    placeholder="Enter Owner Contact Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cnicNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cnic Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Cnic Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Address" {...field} />
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

export default CompanyForm;
