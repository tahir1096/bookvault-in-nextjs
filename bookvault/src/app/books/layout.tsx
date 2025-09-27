import Link from "next/link";
export default function BooksLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <h2>Books Section</h2>
      {children}
      <Link href="/">Back to home page</Link>
    </div>
  );
}