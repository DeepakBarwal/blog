import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepak Barwal's Blog",
  description: "Deepak Barwal's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src={"/blog.gif"}
          alt="blog gif"
          width={140}
          height={140}
          className="mx-auto"
        />
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-white mt-4">
            Deepak Barwal&apos;s Blog
          </h1>
        </Link>
        <p className="text-slate-300">
          I&apos;ll take a potato chip AND EAT IT
        </p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Yours Truly</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-6xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
