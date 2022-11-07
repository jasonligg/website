import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function Footer(props: Props) {
  const { children } = props;

  return (
    <>
      <div>footer</div>
      {children}
    </>
  );
}
