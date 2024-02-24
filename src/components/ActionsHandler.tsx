// @ts-nocheck
// Shadcn Imports
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  ArrowUpRightFromCircle,
  Columns3,
  FolderUp,
  PieChart,
} from "lucide-react";

// Normal Imports
import { GlobalSheet } from "./drawer/page";
export function ActionsHandlers({
  actions,
  drawerForm,
  headerTitle,
  formWidth,
}) {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="border border-gray-600 h-7 px-1.5">
            <ArrowUpRightFromCircle size={"14"} />
            <span className="pl-1 text-xs">Actions</span>
          </MenubarTrigger>
          <MenubarContent>
            {actions.map((item, index) => (
              // Sheet rendering
              <div>
                <GlobalSheet
                  title={item}
                  side="right"
                  item={item}
                  drawerForm={drawerForm}
                  headerTitle={headerTitle}
                  formWidth={formWidth}
                />
              </div>
            ))}
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="border border-gray-600 h-7 px-1">
            <PieChart size={"14"} />
            <span className="pl-1 text-xs">Status</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="border border-gray-600 h-7 px-1">
            <Columns3 size={"14"} />
            <span className="pl-1 text-xs">Columns</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="border border-gray-600 h-7 px-1">
            <FolderUp size={"14"} />
            <span className="pl-1 text-xs">Exports</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
