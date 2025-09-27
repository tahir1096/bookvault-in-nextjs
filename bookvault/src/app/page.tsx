import { Metadata } from "next";
import Link from "next/link";
export const metadata : Metadata =  {
  title : 'Book-Vault | Home',
  description : 'bookvault home page'
}
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Book Vault</h1>
      <p>Your personal book management app.</p>
      <Link href= "/books">Go to Books Section</Link>
    </div>
  );
}