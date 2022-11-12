"use client";
import { type PropsWithChildren, forwardRef } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

type Props = PropsWithChildren<{ slug: string; className?: string }>;

const Navbar = forwardRef<HTMLAnchorElement, Props>(function Navbar(
  props,
  ref
) {
  const { children, slug, className, ...rest } = props;
  const segment = useSelectedLayoutSegment();
  const isActive = segment === slug;

  return (
    <Link
      href={`/${slug}`}
      className={clsx(
        isActive ? "text-red-300" : "hover:text-red-300",
        "p-4",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Link>
  );
});

export default Navbar;
