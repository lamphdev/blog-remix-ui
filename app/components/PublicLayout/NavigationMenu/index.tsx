import { Link } from "@remix-run/react";

interface Props {
  direction: "vertical" | "horizontal";
}

export default function NavigationMenu(props: Props) {
  return (
    <nav className="flex-grow">
      <ul
        className={`flex ${
          props.direction === "vertical" ? "flex-col" : "flex-row"
        }`}
      >
        <li>
          <Link to={""}>Subject</Link>
        </li>
        <li>
          <Link to={""}>About</Link>
        </li>
        <li>
          <Link to={""}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
