"use client";
import { type PropsWithChildren } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

type Props = PropsWithChildren<{ slug: string }>;

export default function Navbar(props: Props) {
  const { children, slug } = props;
  const segment = useSelectedLayoutSegment();
  const isActive = segment === slug;

  return (
    <Link
      href={`/${slug}`}
      className={clsx(isActive ? "text-red-300" : "hover:text-red-300", "p-4")}
    >
      {children}
    </Link>
  );
}
