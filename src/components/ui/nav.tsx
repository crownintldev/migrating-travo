/** @format */

"use client";

import { LucideIcon } from "lucide-react";
import MainMenu from "../nav-sidebar/page";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
  }[];
}

export function Nav() {

  return (
    <aside className="flex">
      <MainMenu />
    </aside>
  );
}
