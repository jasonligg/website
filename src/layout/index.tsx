import type { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

type Props = PropsWithChildren;

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
