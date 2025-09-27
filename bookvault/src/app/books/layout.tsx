export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Books Section</h2>
      <div>{children}</div>
    </div>
  );
}