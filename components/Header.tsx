"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { tinykeys } from "tinykeys";
import { Logo } from "./Logo";

export function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    function unsubscribe() {
      tinykeys(window, {
        // Press "/" for help
        "/": () => {
          setIsVisible((nav) => !nav);
        },
        // Press "Shift+k" for help
        "Shift+k": () => {
          alert("Keyboard shortcuts help opened!");
        },
      });
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <nav
      className={`${
        isVisible ? "block" : "hidden"
      } font-inter mx-auto h-auto w-full  bg-red-400 max-w-screen-2xl`}
    >
      <div className="flex flex-col px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-4 xl:px-20">
        <Link href="/">
          <Logo />
        </Link>
        <div className="mt-14 flex flex-col space-y-8 md:mt-0 md:flex md:flex-row md:space-x-1 md:space-y-0">
          <Link
            href="#"
            className="font-inter rounded-lg md:px-6 md:py-4 md: md:hover:text-gray-800"
          >
            {" "}
            Home
          </Link>
          <Link
            href="#"
            className="font-inter rounded-lg md:px-6 md:py-4 md: md:hover:text-gray-800"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-inter md: rounded-lg pb-8 md:px-6 md:py-4 md: md:hover:text-gray-800"
          >
            {" "}
            Contact{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}
