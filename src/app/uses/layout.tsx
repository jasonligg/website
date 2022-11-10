import { type PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function UsesLayout(props: Props) {
  const { children } = props;

  return children;
}
