import { Outlet } from "@remix-run/react";
import TopBar from "./TopBar";
import LeftMenu from "./LeftMenu";
import { useState } from "react";

export default function PublicLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <LeftMenu show={menuOpen} setShow={setMenuOpen} />
      <TopBar open={menuOpen} setOpen={setMenuOpen} />
      <Outlet />
    </div>
  );
}
