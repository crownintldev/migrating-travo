// @ts-nocheck
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
const AddType = () => {
  const formSchema = z.object({
    categoryName: z.string().min(1, { message: "required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  const onSubmit = async (values) =>  {
    await createApi({
      api: "visa-category",
      dispatch,
      data,
      reset: form.resetField(),
      fetchData: fetchVisaCategory,
    });
    console.log(values);
  }
  return (
    <Sheet>
      <SheetTrigger asChild className="w-fit">
        <span className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize">
          <span className="font-bold text-blue-600">Add type</span>
        </span>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="mb-4">
          <SheetTitle>Add Type Form</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="typeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expense Type Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Expense Type Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className="mt-4 flex items-center gap-2 justify-start">
          <Button type='submit'>Submit</Button>
          <Button type='button' variant='outline'>Cancel</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddType;