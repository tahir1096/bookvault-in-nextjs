'use client'
import Link from "next/link";

export default function Error() {
    return(
        <div>
            unknown error occurred...
            <p>
               <Link href="/"> Please try again later. </Link>
            </p>
        </div>
    )
}