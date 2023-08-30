import Logo from "~/components/Logo";

interface Props {
  show: boolean;
}

export default function LeftMenu(props: Props) {
  return (
    <aside
      className={`absolute top-0 left-0 bg-card w-[270px] h-screen transition-transform duration-300 lg:-translate-x-full ${
        props.show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Logo />
      <nav></nav>
    </aside>
  );
}
