import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import BackHome from "@/components/BackHome";

export const metadata: Metadata = {
  title: "James Jimenez | Full Stack Developer",
  description: "Portfolio of James Jimenez, a full stack developer",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth " lang="en" suppressHydrationWarning>
      <body className={`antialiased ${poppins.className} sm:px-10 px-5 `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <BackHome />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
