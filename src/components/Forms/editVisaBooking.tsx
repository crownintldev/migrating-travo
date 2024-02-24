//@ts-nocheck
"use client";
import React from "react";
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
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
const EditVisaBooking = ({ sheetOpen, setSheetOpen }) => {
  return (
    <Sheet open={sheetOpen} onOpenChange={() => setSheetOpen(false)}>
      <SheetContent side={"left"}>
        <SheetHeader className="mb-4">
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
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
      </SheetContent>
    </Sheet>
  );
};

export default EditVisaBooking;
