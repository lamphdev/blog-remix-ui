import Logo from "~/components/Logo";
import { MenuIcon } from "lucide-react";
import { MenuItem, menu } from "../menu-config";
import { Link, useMatches } from "@remix-run/react";

interface Props {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export default function TopBar(props: Props) {
  return (
    <header className="h-14 w-full sticky flex bg-card shadow justify-between px-[5%] items-center">
      <Logo />

      <Navigation />
      <button
        onClick={() => props.setOpen(!props.open)}
        className="inline md:hidden p-2 rounded-full text-content hover:bg-white active:bg-primary active:text-white"
      >
        <MenuIcon />
      </button>
    </header>
  );
}

const Navigation = () => {
  const matches = useMatches();
  const currentPath = matches[matches.length - 1].pathname;

  return (
    <ul className="hidden md:flex gap-4 font-semibold text-content">
      {menu.map((element) => (
        <NavigationItem
          key={element.pathName}
          item={element}
          current={currentPath}
        />
      ))}
    </ul>
  );
};

const NavigationItem = (props: { item: MenuItem; current: string }) => {
  const { item, current } = props;
  return (
    <li
      className={
        current === item.pathName ? "text-primary" : " hover:text-primary"
      }
    >
      {item.pathName ? (
        <Link to={item.pathName}>{item.name}</Link>
      ) : (
        <span>{item.name}</span>
      )}
    </li>
  );
};
