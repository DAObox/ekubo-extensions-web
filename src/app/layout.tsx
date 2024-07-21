import type { Metadata } from "next";
import "../global.css";
import localFont from "next/font/local";
import Navigation from "./components/Navigation";
import { SessionProvider } from "next-auth/react"
import Providers from "./providers";
import { getServerSession } from "next-auth";

const agrandirVariable = localFont({
  src: "./fonts/Agrandir Narrow Bold.otf",
  variable: "--font-agrandir",
  display: "swap",
  weight: "400",
});

const agrandirBody = localFont({
  src: "./fonts/Agrandir-C3-Regular.otf",
  variable: "--font-agrandirBody",
  display: "swap",
  weight: "400",
});

const IBMPlexSans = localFont({
  src: "./fonts/IBMPlexSans-Bold.otf",
  variable: "--font-IBMPlexSans",
  display: "swap",
});

const circular = localFont({
  src: "./fonts/CircularLL-Book.ttf",
  variable: "--font-circular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ekubo Community Extensions",
  description:
    "A community curated collection of open-source extensions for Ekubo protocol.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
    <Providers session={session}>
      <html
        lang="en"
        className={`${IBMPlexSans.variable} ${agrandirVariable.variable} ${circular.variable} ${agrandirBody.variable} `}
      >
        <body className="flex flex-col items-center justify-center overflow-x-hidden">
          <Navigation />
          {children}
        </body>
      </html>
    </Providers>
  );
}
