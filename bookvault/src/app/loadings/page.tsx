'use client'
import Link from "next/link";

export default function Loading() {
    return (
        <div>Loading books...
            <p>
                <Link href="/"> Please try again later. </Link>
            </p>
        </div>
    )
}