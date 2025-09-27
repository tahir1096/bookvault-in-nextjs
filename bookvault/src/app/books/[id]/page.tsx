import { books } from '../../../data';
import React from 'react';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return books.map((book) => ({ id: book.id }));
}

async function getBook(id: string) {
    return books.find((book) => book.id === id);
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const book = await getBook(params.id);
    return {
        title: book ? `${book.title} | BookVault` : 'Book Not Found | BookVault',
        description: book ? `Details and information about ${book.title} by ${book.author}.` : 'Book not found.'
    };
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