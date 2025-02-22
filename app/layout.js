import {Phudu} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const phuduFont = Phudu({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: "400",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${phuduFont.variable}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
