import { type PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function WorkLayout(props: Props) {
  const { children } = props;

  return children;
}
