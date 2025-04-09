'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {cn} from '@/lib/utils'; // Optional classNames helper

const navItems = [
    {label: 'Home', href: '/'},
    {
        label: 'News',
        href: '/news',
        dropdown: [
            {label: 'UAZA in the Media', href: '/uaza-in-media'},
        ],
    },
];

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 w-full border-b z-50 bg-white">
            <nav className="container flex items-center justify-between px-6 py-3 ">
                {/* Logo + Name */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/uaza-logo.png" // Make sure the logo exists in /public
                        alt="UAZA Logo"
                        width={200}
                        height={60}
                    />
                </Link>

                {/* Nav links */}
                <ul className="flex items-center gap-6 text-sm uppercase font-medium text-black">
                    {navItems.map((item) =>
                            item.dropdown ? (
                                <li
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <span className={cn(
                                        "cursor-pointer hover:text-primary",
                                        pathname.startsWith(item.href) && "text-primary underline"
                                    )}>
                                       <Link
                                           href={item.href}
                                           className={cn(
                                               "hover:text-primary",
                                               pathname === item.href && "text-primary underline"
                                           )}
                                       >
                                        {item.label}
                                    </Link>
                                        {isDropdownOpen && (
                                            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 shadow-md bg-white border text-center z-50">
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.href}>
                                                        <Link
                                                            href={sub.href}
                                                            className="block px-4 py-2 text-xs tracking-widest hover:bg-gray-100"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </span>

                                </li>
                            ) : (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "hover:text-primary",
                                            pathname === item.href && "text-primary underline"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                    )}
                </ul>
            </nav>
        </header>
    );
}
