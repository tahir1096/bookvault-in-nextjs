import { books } from "../../../data";
export async function GET() {
    return Response.json(books);
}
export async function POST(request: Request) {
  const body = await request.json();
  const newBook = { id: String(Date.now()), ...body };
  books.push(newBook);
  return Response.json(newBook, { status: 201 });
}