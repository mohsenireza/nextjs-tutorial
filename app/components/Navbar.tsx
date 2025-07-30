import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 shadow-sm bg-white font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={20} />
                </Link>

                <div className="flex items-center gap-4 text-black">
                    {session && session.user ? (
                        <>
                            <Link href="/startup/create">
                                Create
                            </Link>

                            <form action={async () => {
                                "use server";

                                await signOut({redirectTo:"/"});
                            }}>
                                 <button type="submit">
                                    Logout
                                </button>
                            </form>

                            <Link href={`/user/${session.user.id}`}>
                                <span>{session.user.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";

                            await signIn('github')
                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;