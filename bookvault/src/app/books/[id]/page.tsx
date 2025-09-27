import { books } from '../../../data';
import React from 'react';
export async function generateStaticParams() {
    return books.map((book) => ({ id: book.id }));
}

async function getBook(id: string) {
    return books.find((book) => book.id === id);
}

interface BookPageProps {
    params: { id: string };
}

export default async function BookPage({ params }: BookPageProps) {
    const book = await getBook(params.id);
    if (!book) {
        return <div>Book not found</div>;
    }
    return (
        <div>
            <h1>{book.title}</h1>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Genre:</b> {book.genre}</p>
        </div>
    );
}