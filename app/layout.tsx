import getCurrentUser from "./actions/getCurrentUser";
import LoginModal from "./components/modals/LoginModal";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import NavBar from "./components/navbar/NavBar";
import ToasterProvider from "./components/providers/ToasterProvider";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb your home.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider></ToasterProvider>
        <RegisterModal></RegisterModal>
        <LoginModal></LoginModal>
        <RentModal></RentModal>
        <NavBar currentUser={currentUser}></NavBar>{children}</body>
    </html>
  );
}
