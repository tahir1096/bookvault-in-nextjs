# 📚 BookVault

A simple **Book Management App** built with **Next.js 14 App Router**.  
Users can browse books, view details, and add new books using API routes (GET & POST).  
This project demonstrates **Next.js features** like routing, layouts, loading/error UI, metadata, and route handlers.

---

## 🚀 Features

- 🗂️ **App Router** with Static & Dynamic Routes
- 🎨 **Layouts & Nested Layouts**
- 📝 **Add New Book** (via POST API)
- 📡 **GET All Books** and **GET Single Book**
- ⚡ **Loading UI** for slow fetches
- 🚧 **Error Boundaries** and 404 **Not Found Page**
- 🏷️ **Metadata** for SEO-friendly titles
- 🔄 **Programmatic Navigation**
- 📦 Mock **database** (using in-memory array)

---

## 📸 Demo Preview

| Page                     | Description                             |
|--------------------------|-----------------------------------------|
| `/`                      | Landing page with link to books         |
| `/books`                 | List of all books (fetched from API)    |
| `/books/[id]`            | Dynamic book details page               |
| `/books/new`             | Form to add a new book                  |
| `/api/books`             | API endpoint for all books (GET/POST)   |

---

## 🛠️ Tech Stack

- [Next.js 14+ (App Router)](https://nextjs.org/docs)
- TypeScript
- React (Server & Client Components)
- Fetch API for server-side data fetching
- In-memory mock data (`data.ts`)

---

🔥 Future Improvements

Add DELETE and UPDATE book functionality

Implement search & filter with searchParams

Add authentication for adding/deleting books

Connect to a real database (like MongoDB or PostgreSQL)

