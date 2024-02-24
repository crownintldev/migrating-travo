// @ts-nocheck
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
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
import PhoneInput from "react-phone-input-2";
const AddAgent = ({ setOpenSheet, openSheet }) => {
  const formSchema = z.object({
    // type: z.string().min(1, { message: "required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // type: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("====data", data, form.getValues());
    // await createApi({
    //   api: "visa-category",
    //   dispatch,
    //   data,
    //   reset: form.resetField(),
    //   fetchData: fetchVisaCategory,
    // });
  };
  return (
    <Sheet open={openSheet} onOpenChange={() => setOpenSheet(false)}>
      <SheetContent side={"left"}>
        <SheetHeader className="mb-4">
          <SheetTitle>Add Agent Form</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={"pk"}
                      inputStyle={{ width: "100%" }}
                      containerStyle={{ width: "100%" }}
                      placeholder="Enter Phone"
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
                    <Input placeholder="Cnic Number" {...field} />
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
            <SheetFooter className="mt-4 flex items-center gap-2 justify-start">
              <Button type="submit">Submit</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpenSheet(false);
                  form.resetField();
                }}
              >
                Cancel
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddAgent;
