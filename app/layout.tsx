import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import NavBar from "./components/navbar/NavBar";
import ToasterProvider from "./components/providers/ToasterProvider";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb your home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider></ToasterProvider>
        <RegisterModal></RegisterModal>
        <NavBar></NavBar>{children}</body>
    </html>
  );
}
