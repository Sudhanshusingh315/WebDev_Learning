"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const meow = pathname.split("/")[1];
    return (
        <div>
            <h1>Request not found</h1>
            <p>Count not find requested resources</p>
            <p>Path name in the url is {meow}</p>
        </div>
    );
}
