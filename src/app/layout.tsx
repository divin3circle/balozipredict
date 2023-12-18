import type { Metadata } from "next";
import "./globals.css";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";
import Modal from "./Modal";

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
          <div className="max-w-6xl mx-auto">
            <Modal />
          </div>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
