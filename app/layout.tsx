import "./globals.css";
import { Pridi } from "next/font/google";

const pridi = Pridi({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Morizuq's Porfolio",
  description: "Built with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pridi.className}>
        <nav className="flex justify-between mt-5 pl-4 pr-4 mb-5">
          <h2>Morizuq</h2>
          <ul className="flex">
            <li className="ml-4">
              <a href="/">Home</a>
            </li>
            <li className="ml-4">
              <a href="/about">About</a>
            </li>
            <li className="ml-4"> 
              <a href="/projects">Projects</a>
            </li>
            <li className="ml-4">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
