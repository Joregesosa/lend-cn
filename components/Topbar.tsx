import Image from 'next/image'
import React from 'react'

export default function Topbar() {
    return (
        <nav className="flex justify-between px-10 h-[4.5rem] items-center shadow-md sticky top-0 bg-white">
            <figure className="rounded-full w-16 h-full overflow-hidden flex-shrink-0">
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={256}
                    height={256}
                    priority
                />
            </figure>
            <ul className="flex gap-6">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>

        </nav>
    )
}
