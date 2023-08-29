import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next App",
  description: "My Next App with Django",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
          <header className="text-lg">
            <nav className="bg-gray-800 w-screen">
              <div className="flex items-center pl-8 h-14">
                <div className="flex space-x-4">
                  <Link href="/">
                    <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                      Home
                    </p>
                  </Link>
                  <Link href="/blog-page">
                    <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                      Blog
                    </p>
                  </Link>
                  <Link href="/contact-page">
                    <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                      Contact
                    </p>
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex flex-1 justify-center items-center flex-col w-screen h-screen">
            {children}
          </main>
          <footer className="w-full h-12 flex justify-center items-center flex-col w-screen border-t">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powerd By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
