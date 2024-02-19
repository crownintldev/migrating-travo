import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { ReactNode } from "react";

interface GlobalSheetProps {
  title: string;
  children?: ReactNode;
  side: string;
}

export function GlobalSheet({ title, children, side }: GlobalSheetProps) {

  return (
    <Sheet key={side}>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
