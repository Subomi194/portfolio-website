import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/componenets/Navbar";
import { Footer } from "@/componenets";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:["400", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"],
});

export const metadata = {
  title: "My Potfolio",
  description: "Created by Subomi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${poppins.variable} ${caveat.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      

      </body>
    </html>
  );
}
