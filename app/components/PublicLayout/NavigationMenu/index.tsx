import { Link, useMatches } from "@remix-run/react";
import { useMemo } from "react";

interface Props {
  direction: "vertical" | "horizontal";
}

export default function NavigationMenu(props: Props) {
  const matches = useMatches();
  const currentPath = useMemo(() => {
    return matches[matches.length - 1].pathname;
  }, [matches]);

  return (
    <nav className="flex-grow">
      <ul
        className={`p-0 flex gap-4 text-content ${
          props.direction === "vertical" ? "flex-col" : "flex-row justify-end"
        }`}
      >
        <li>
          <Link to={"/subject"}>Subject</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
