import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book Vault",
  description: "A book management app",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header>
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/books/new">Add Books</Link>
        </header>
        <main>{children}</main>
    </body>
    </html >
  );
}