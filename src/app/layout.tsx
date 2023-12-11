import type { Metadata } from "next";
import "./globals.css";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

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
        </nav>
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
