/** Main layout.tsx */
import type { Metadata } from "next";
import { root } from "@actionishope/shelley/styles";
import "@/styles";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={root} data-theme="dark">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
