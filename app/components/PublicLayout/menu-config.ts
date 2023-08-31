export interface MenuItem {
  name: string;
  pathName?: string;
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  {
    name: "About us",
    pathName: "/about",
  },
  {
    name: "Contact us",
    pathName: "/contact",
  },
  {
    name: "Tools",
    pathName: "/tools",
  },
];
