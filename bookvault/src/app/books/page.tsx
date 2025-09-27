export default async function BooksPage() {
    const res = await fetch("http://localhost:3000/api/books", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const books = await res.json();
    return (
        <div>
            <h1>📚 Books List </h1>
            <a href="/books/new" style={{ color: "blue", textDecoration: "underline" }}>➕ Add New Book</a>
            <ol>
                {books.map((book: { id: number; title: string; author: string }) => (
                    <li key={book.id}>
                        <a href={`/books/${book.id}`} style={{ color: "green", textDecoration: "underline" }}> </a>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ol>

        </div>
    );
}