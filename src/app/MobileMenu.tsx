"use client";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import NavbarLink from "@/app/NavbarLink";

export default function MobileMenu() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="self-start py-6 md:hidden">
            {!open && <MenuHamburgerIcon />}
            {open && <MenuCrossIcon />}
          </Menu.Button>
          <div
            className={clsx(
              open ? "" : "hidden",
              "fixed top-0 left-0 h-full w-full backdrop-blur-sm"
            )}
          />
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="absolute left-16 top-4 rounded-lg border border-stone-500 bg-stone-900/90"
          >
            <Menu.Items className="flex flex-col">
              <Menu.Item>
                <NavbarLink
                  slug="about"
                  className="ui-active:border ui-active:border-red-300"
                >
                  About
                </NavbarLink>
              </Menu.Item>
              <Menu.Item>
                <NavbarLink
                  slug="work"
                  className="ui-active:border ui-active:border-red-300"
                >
                  Work
                </NavbarLink>
              </Menu.Item>
              <Menu.Item>
                <NavbarLink
                  slug="articles"
                  className="ui-active:border ui-active:border-red-300"
                >
                  Articles
                </NavbarLink>
              </Menu.Item>
              <Menu.Item>
                <NavbarLink
                  slug="gratitude"
                  className="ui-active:border ui-active:border-red-300"
                >
                  Gratitude
                </NavbarLink>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

function MenuHamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="ml-6 h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function MenuCrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="ml-6 h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
