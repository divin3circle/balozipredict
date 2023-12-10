import type { Metadata } from "next";
import "./globals.css";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";

export const metadata: Metadata = {
  title: "Balozi Predictions",
  description: "Accurate Betting tips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <MainNavBar />
          <MobileNavBar />
        </nav>
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
