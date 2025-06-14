import type { Metadata } from "next";
import "../app/styles/globals.css";
import { Kanit } from "next/font/google";
import CustomCursor from "./_components/CustomCursor";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Axtra Agency",
  description: "Axtra Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
