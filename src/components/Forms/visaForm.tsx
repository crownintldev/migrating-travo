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
import AddAgent from "./addVisaAgentForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { findDataByIndex, setFormInputValues } from "@/utils/helperfunction";

const VisaForm = ({ _id }) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [selectedIds, setSelectedIds] = useState(null);
  let editId = []?.find((item) => item._id === selectedIds);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenseCategory({}));
    dispatch(fetchExpenseType({}));
  }, []);
  const formSchema = z.object({
    // title: z.string().min(1, { message: "required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async () => {
    const data = form.getValues();
    console.log("====data", data);
    // await createApi({
    //   api: "expense",
    //   dispatch,
    //   data,
    //   reset: form.resetField(),
    //   fetchData: expense,
    // });
  };

  const renderSelectItems = (data, valueKey, nameKey) => {
    if (data && data.length > 0) {
      return data.map((item) => {
        console.log("======item", item);
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
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="passportNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passport Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Passport Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bookletNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Booklet Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Booklet Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cnic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cnic</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Cnic" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Surname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="givenName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Given Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Given Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pob</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Pob" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {renderSelectItems([], "_id", "name")}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Nationality" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {renderSelectItems([], "_id", "name")}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {renderSelectItems(
                        [
                          { label: "Male", value: "male" },
                          { label: "Female", value: "female" },
                          { label: "Other", value: "other" },
                        ],
                        "value",
                        "label"
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfIssue"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Issue</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfExpire"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Expire</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Religion" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {renderSelectItems(
                        [
                          { label: "ISLAM", value: "islam" },
                          { label: "CHRISTAN", value: "christan" },
                          { label: "HINDU", value: "hindu" },
                          { label: "SIKH", value: "sikh" },
                        ],
                        "value",
                        "label"
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Father Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="issuingAuthority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Issuing Authority</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Issuing Authority" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="trackingNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tracking Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Tracking Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Remarks" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Refer Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Refer Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {renderSelectItems([], "value", "label")}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span
              onClick={() => setOpenSheet(true)}
              className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize"
            >
              <span className="font-bold text-blue-600">Add Agent</span>
            </span>

            <FormField
              control={form.control}
              name="refer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Refer</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Refer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {renderSelectItems([], "value", "label")}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="uploadFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Files</FormLabel>
                  <FormControl>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Input id="picture" type="file" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <AddAgent openSheet={openSheet} setOpenSheet={setOpenSheet} />
    </div>
    
  );
};

export default VisaForm;
