import { books } from "../../../data";
export async function GET() {
    return Response.json(books);
}