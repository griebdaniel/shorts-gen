import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
  },
  {
    title: "Videos",
    url: "#",
  },
  {
    title: "Examples",
    url: "#",
  },
  {
    title: "Connect Social",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>
          <Link href="/create-short">
            <Button>create video</Button>
          </Link>
        </SidebarHeader>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>{item.title}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
