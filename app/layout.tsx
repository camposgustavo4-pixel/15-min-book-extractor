import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "15-Min Book Extractor",
  description: "MVP app scaffold for extracting and planning book sessions"
};

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/book/new", label: "New Book" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <h1 className="text-lg font-semibold">15-Min Book Extractor</h1>
            <nav className="flex gap-4 text-sm">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-slate-700 hover:text-slate-900">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
