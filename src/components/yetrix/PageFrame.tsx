import type { PropsWithChildren } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageFrame({ children }: PropsWithChildren) {
  return (
    <main className="relative">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
