import { type PropsWithChildren } from "react";
import Link from "next/link";
import { Open_Sans } from "@next/font/google";

import "../styles/globals.css";

type Props = PropsWithChildren;

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open" });

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-screen flex-col justify-between bg-stone-900 text-stone-100">
        <header>
          <nav className="flex flex-row justify-center border-solid border-stone-50 pt-4">
            <ul className="flex flex-row space-x-6 rounded-full bg-stone-800 text-sm md:px-3">
              <Link href="/about" className="p-4 hover:text-red-300">
                About
              </Link>
              <Link href="/articles" className="p-4 hover:text-red-300">
                Articles
              </Link>
              <Link href="/work" className="p-4 hover:text-red-300">
                Work
              </Link>
              <Link href="/uses" className="p-4 hover:text-red-300">
                Uses
              </Link>
            </ul>
          </nav>
        </header>
        <main className="md:px-18 relative flex min-w-fit flex-col items-center justify-around px-4 pb-4 sm:px-6 lg:max-h-[768px] lg:px-44 xl:px-96">
          {children}
        </main>
        <footer className="mx-auto max-w-7xl flex-row justify-between border-t border-t-stone-500 py-4 md:flex lg:px-8">
          <ul className="flex flex-row justify-center space-x-6 text-sm">
            <Link href="/about" className="p-4 hover:text-red-300">
              About
            </Link>
            <Link href="/work" className="p-4 hover:text-red-300">
              Work
            </Link>
            <Link href="/gratitude" className="p-4 hover:text-red-300">
              Gratitude
            </Link>
          </ul>
          <p className="p-4 text-xs text-stone-700">
            © {new Date().getFullYear()} Jason Liggayu. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
