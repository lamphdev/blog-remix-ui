import { useEffect, useRef } from "react";
import Logo from "~/components/Logo";

interface Props {
  show: boolean;
  setShow: (state: boolean) => void;
}

export default function LeftMenu(props: Props) {
  const ref = useRef<any>();

  useEffect(() => {
    if (props.show) {
      const handler = (e: any) => {
        const refEl = ref.current as HTMLElement;
        const target = e.target as HTMLElement;
        if (!refEl.contains(target)) {
          props.setShow(false);
        }
      };
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }
  }, [props.show]);

  return (
    <aside
      ref={ref}
      className={`absolute top-0 left-0 z-10 bg-card shadow w-[270px] h-screen transition-transform duration-300 md:-translate-x-full ${
        props.show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Logo />
      <nav></nav>
    </aside>
  );
}
