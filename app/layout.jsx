import { Poppins, Caveat, Allura } from "next/font/google";
import "./globals.css";
import Navbar from "@/componenets/Navbar";
import { Footer } from "@/componenets";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["400", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

export const metadata = {
  title: "My Potfolio",
  description: "Created by Subomi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${poppins.variable} ${caveat.variable} ${allura.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      

      </body>
    </html>
  );
}
