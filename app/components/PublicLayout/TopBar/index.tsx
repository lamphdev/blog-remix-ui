import Logo from "~/components/Logo";
import NavigationMenu from "../NavigationMenu";

export default function TopBar() {
  return (
    <header className="h-12 w-full sticky flex px-2 lg:px-12 items-center">
      <Logo />

      <NavigationMenu direction="horizontal" />
    </header>
  );
}
