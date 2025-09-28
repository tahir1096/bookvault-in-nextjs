import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const books = await db.collection("books").find({}).toArray();
  return Response.json(books);
}

export async function POST(request: Request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db();
  const newBook = { ...body, createdAt: new Date() };
  const result = await db.collection("books").insertOne(newBook);
  return Response.json({ ...newBook, _id: result.insertedId }, { status: 201 });
}