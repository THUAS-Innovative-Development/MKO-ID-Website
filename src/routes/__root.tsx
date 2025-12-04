import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

const RootLayout = () => (
  <>
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1 w-full flex justify-center">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
      <Footer />
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
