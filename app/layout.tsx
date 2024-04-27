import { Metadata } from "next";
import "./globals.css";
import { Pridi } from "next/font/google";
import Link from "next/link";

const pridi = Pridi({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morizuq Shoneye | Mobile Engineer",
  description: " Morizuq Shoneye is a Mobile Engineer with experience in building user friendly applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={pridi.className}>
        <nav className="flex justify-between mt-5 pl-4 pr-4 mb-5">
          <Link href="/">Morizuq</Link>
          <ul className="flex">
            <li className="ml-4">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-4">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="ml-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
