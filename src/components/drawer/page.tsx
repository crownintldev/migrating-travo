
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

// Import Lucide Icons
import {
  Pencil,
  Plus,
  Trash,
} from "lucide-react";

interface GlobalSheetProps {
  title: string;
  children?: ReactNode;
  side: string;
  item?: string;
}

export function GlobalSheet({ title, children, side, item }: GlobalSheetProps) {

  return (
    <Sheet>
      {
        title === 'sidebar' ? <SheetTrigger asChild>
          <AlignJustify />
        </SheetTrigger>
          :
          <SheetTrigger asChild>
            <span className="flex text-xs justify-between p-2 items-center hover:cursor-pointer hover:bg-slate-200">
              {item}
              {item === "create" && <Plus size={"10"} />}
              {item === "update" && <Pencil size={"10"} />}
              {item === "delete" && <Trash size={"10"} />}
            </span>
          </SheetTrigger>
      }
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
        <SheetFooter>
          <SheetClose>
            <Button type="submit">{title}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
