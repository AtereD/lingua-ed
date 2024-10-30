
import "./globals.css";
import Footer from "@/components/Footer";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "LinguaEd",
  description: "LinguaEd built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head >
      <link href='/icon.png' rel='icon' />
      </head>  
      <body className={`${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}
