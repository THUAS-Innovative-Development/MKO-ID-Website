import { useHamburgerMenu } from "@/src/context/HamburgerMenuContext";
import type { ReactNode } from "react";

export function Hamburger(): ReactNode {
  const { isOpen, toggle } = useHamburgerMenu();

  return (
    <button
      aria-label="Navigatie menu"
      onClick={toggle}
      className="flex flex-col justify-center gap-px items-center lg:hidden w-8 h-8"
    >
      <span
        className={`bg-[#1F252F] block transition-all duration-300 ease-out 
                  h-1 w-6 mx-auto rounded-full origin-center ${
                    isOpen
                      ? "rotate-45 translate-y-[7px]"
                      : "-translate-y-px"
                  }`}
      ></span>
      <span
        className={`bg-[#1F252F] block transition-all duration-300 ease-out 
                  h-1 w-6 mx-auto rounded-full my-0.5 origin-center ${
                    isOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
      ></span>
      <span
        className={`bg-[#1F252F] block transition-all duration-300 ease-out 
                  h-1 w-6 mx-auto rounded-full origin-center ${
                    isOpen
                      ? "-rotate-45 -translate-y-[7px]"
                      : "translate-y-px"
                  }`}
      ></span>
    </button>
  );
}