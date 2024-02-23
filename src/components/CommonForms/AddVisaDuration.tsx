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
import { createApi } from "@/action/function";
import { useDispatch } from "react-redux";
import { fetchVisaCategory } from "@/store";
const AddVisaDuration = ({
  buttonName,
  title,
  placeholder,
  fieldLabel,
  setSheetOpen,
  sheetOpen,
}) => {
  const dispatch = useDispatch();
  const formSchema = z.object({
    duration: z.string().min(1, { message: "required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      duration: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("===data", data);
    // await createApi({
    //   api: "visa-category",
    //   dispatch,
    //   data,
    //   reset: form.resetField(),
    //   fetchData: fetchVisaCategory,
    // });
  };
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
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder={placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter className="mt-4 flex items-center gap-2 justify-start">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline"  onClick={() => setSheetOpen(false)}>
                Cancel
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddVisaDuration;
