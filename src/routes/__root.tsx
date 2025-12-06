import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import {
  HamburgerMenuProvider,
  useHamburgerMenu,
} from "../context/HamburgerMenuContext";
import { navigationItems } from "../config/navigation";
import React from "react";

const RootLayoutInner = () => {
  const { isOpen } = useHamburgerMenu();

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1 w-full flex justify-center">
        {isOpen ? (
          <div className="bg-[#F9F9F9] flex-1 min-h-0 flex justify-center items-center lg:hidden">
            <div className="flex flex-col w-full items-center">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#223343] hover:text-gray-400 transition-colors duration-200 font-arial-black text-lg w-full py-4 px-24"
                  >
                    {item.label}
                  </a>

                  {index !== navigationItems.length - 1 && (
                    <hr
                      className="my-4 block h-[0.5px]"
                      style={{
                        width: "calc(100% - 100px)",
                        border: 0,
                        borderTop: "0.5px solid #000000",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <TanStackRouterDevtools />
      {isOpen ? null : <Footer />}
    </div>
  );
};

const RootLayout = () => (
  <HamburgerMenuProvider>
    <RootLayoutInner />
  </HamburgerMenuProvider>
);

export const Route = createRootRoute({ component: RootLayout });
