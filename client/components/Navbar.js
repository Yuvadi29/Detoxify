'use client';

import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Detoxify</div>
                <div>
                    <Link href="/">
                        <span className="text-gray-300 hover:text-white mx-2">Home</span>
                    </Link>
                    <Link href="/select-topic">
                        <span className="text-gray-300 hover:text-white mx-2">Select Topics</span>
                    </Link>
                    {user ? (
                        <>
                            <span className="text-gray-300 mx-2">{user.email}</span>
                            <button onClick={logout} className="text-gray-300 hover:text-white mx-2">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <span className="text-gray-300 hover:text-white mx-2">Login</span>
                            </Link>
                            <Link href="/signup">
                                <span className="text-gray-300 hover:text-white mx-2">Signup</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
