import { type PropsWithChildren } from "react";
import Link from "next/link";

import "../styles/globals.css";

type Props = PropsWithChildren;

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-stone-100">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-stone-900"></div>
          </div>
        </div>
        <div className="relative flex h-screen flex-col justify-between">
          <header>
            <nav className="flex flex-row justify-center border-solid border-stone-50 pt-4">
              <ul className="flex flex-row space-x-6 rounded-full bg-stone-800 md:px-3 text-sm">
                <Link href="/about" className="p-4 hover:text-red-300">
                  About
                </Link>
                <Link href="/articles" className="p-4 hover:text-red-300">
                  Articles
                </Link>
                <Link href="/work" className="p-4 hover:text-red-300">
                  Work
                </Link>
                <Link href="/tools" className="p-4 hover:text-red-300">
                  Tools
                </Link>
              </ul>
            </nav>
          </header>
          {children}
          <footer className="mx-auto max-w-7xl flex-row justify-between border-t border-t-stone-500 py-4 md:flex lg:px-8">
            <ul className="flex flex-row justify-center space-x-6 text-sm">
              <Link href="/about" className="p-4 hover:text-red-300">
                About
              </Link>
              <Link href="/work" className="p-4 hover:text-red-300">
                Work
              </Link>
              <Link href="/tools" className="p-4 hover:text-red-300">
                Tools
              </Link>
            </ul>
            <p className="p-4 text-stone-700">
              {new Date().getFullYear()} Jason Liggayu. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
