import { type PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function ArticlesLayout(props: Props) {
  const { children } = props;

  return children;
}
