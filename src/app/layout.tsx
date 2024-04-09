/** Main layout.tsx */
import type { Metadata } from "next";
import { root } from "@actionishope/shelley/styles";
import "@/styles";
import { Header } from "@/components/Header";
import type { Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SetViewportHeight } from "@/components/SetViewportHeight";

export const viewport: Viewport = {
  themeColor: "#75eaff",
};

export const metadata: Metadata = {
  title: "Shelley: A Stylable User Interface",
  description: "@todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={root} suppressHydrationWarning>
      <SetViewportHeight />
      <body>
        <ThemeProvider
          enableColorScheme={false}
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
