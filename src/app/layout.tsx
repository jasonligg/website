import { type PropsWithChildren } from "react";
import Link from "next/link";
import { Open_Sans } from "@next/font/google";
import Image from "next/image";
import NavbarLink from "@/app/NavbarLink";
import MobileMenu from "@/app/MobileMenu";
import avatar from "../../public/avatar.jpg";
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
      <body className="flex flex-col justify-between bg-stone-900 text-stone-100">
        <header className="pt-4">
          <nav className="flex flex-row justify-between border-solid border-stone-50 md:justify-center">
            <MobileMenu />
            <Link href="/" className="mr-6 w-[85px] md:w-[50px]">
              <Image
                src={avatar}
                alt="Picture of Jason Liggayu that links to homepage."
                className="rounded-full"
                priority
              />
            </Link>
            <ul className="hidden flex-row space-x-6 rounded-full bg-stone-800 text-sm md:visible md:flex md:px-3">
              <NavbarLink slug="about">About</NavbarLink>
              <NavbarLink slug="work">Work</NavbarLink>
              <NavbarLink slug="articles">Articles</NavbarLink>
              <NavbarLink slug="gratitude">Gratitude</NavbarLink>
            </ul>
          </nav>
        </header>
        <main className="md:px-18 flex min-h-screen min-w-fit flex-col items-center justify-around px-6 pb-4 sm:px-6 lg:max-h-[768px] lg:px-44 xl:px-96">
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
            © <time>2022</time> Jason Liggayu. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
