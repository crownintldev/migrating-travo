// React Imports
import { ReactNode } from "react";

// Shadcn Imports
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// Lucide Icons Imports
import { AlignJustify } from "lucide-react";
import { Pencil, Plus, Trash } from "lucide-react";

interface GlobalSheetProps {
  title: string;
  addForm?: ReactNode;
  editForm?: ReactNode;
  side: string;
  item?: string;
  headerTitle?: string;
  formWidth?: string;
}

export function GlobalSheet({
  title,
  addForm,
  editForm,
  side,
  item,
  headerTitle,
  formWidth,
}: GlobalSheetProps) {
  
  console.log("====sheetWidth", formWidth, headerTitle);
  return (
    <Sheet>
      {title === "sidebar" ? (
        <SheetTrigger asChild>
          <AlignJustify />
        </SheetTrigger>
      ) : (
        <SheetTrigger asChild>
          <span className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200 capitalize">
            {item}
            {item === "create" && <Plus size={"10"} />}
            {item === "update" && <Pencil size={"10"} />}
            {item === "delete" && <Trash size={"10"} />}
          </span>
        </SheetTrigger>
      )}
      <SheetContent
        className={`overflow-x-hidden overflow-y-auto`}
        style={{maxWidth:formWidth}}
        side={side}
      >
        <SheetHeader className="mb-4">
          <SheetTitle>{headerTitle}</SheetTitle>
        </SheetHeader>

        {addForm}

        <SheetFooter className="mt-4">
          {/* <SheetClose>
            <Button type="submit" className="h-8">
              {title}
            </Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
