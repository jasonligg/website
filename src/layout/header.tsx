import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function Header(props: Props) {
  const { children } = props;

  return (
    <div>
      header
      {children}
    </div>
  );
}
