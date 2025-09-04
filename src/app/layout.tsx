import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100", // Thin
    "200", // ExtraLight
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // SemiBold
    "700", // Bold
    "800", // ExtraBold
    "900", // Black
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} `}>
        {children}
      </body>
    </html>
  );
}
