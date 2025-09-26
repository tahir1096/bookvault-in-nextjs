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
        {children}
        <header>
          <link href="/">Home</link>
          <link href="/about">Books</link>
          <link href="/contact">Add Books</link>
        </header>
        
      </body>
    </html>
  );
}