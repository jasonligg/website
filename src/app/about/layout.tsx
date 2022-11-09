import { type PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function AboutLayout(props: Props) {
  const { children } = props;

  return children;
}
