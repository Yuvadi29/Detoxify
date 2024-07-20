'use client';

import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import { Button } from './ui/button';
import { HomeIcon, ListIcon, UserIcon, LogInIcon, UserPlusIcon, LogOutIcon } from 'lucide-react';

const Sidebar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="fixed top-0 left-0 h-full bg-gray-900 text-white p-6 shadow-lg w-64 flex flex-col justify-between">
            <div>
                <div className="text-3xl font-bold mb-8 flex items-center space-x-2">
                    <span>Detoxify</span>
                </div>
                <div className="space-y-6">
                    <Link href="/" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                        <HomeIcon className="w-6 h-6" />
                        <span className="text-lg">Home</span>
                    </Link>
                    <Link href="/select-topic" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                        <ListIcon className="w-6 h-6" />
                        <span className="text-lg">Select Topics</span>
                    </Link>
                </div>
            </div>
            <div className="space-y-6">
                {user ? (
                    <>
                        <div className="flex items-center space-x-3">
                            <UserIcon className="w-6 h-6 text-gray-300" />
                            <span className="text-lg text-gray-300">{user.email}</span>
                        </div>
                        <Button onClick={logout} className="flex items-center space-x-3 text-gray-300 hover:text-white">
                            <LogOutIcon className="w-6 h-6" />
                            <span className="text-lg">Logout</span>
                        </Button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                            <LogInIcon className="w-6 h-6" />
                            <span className="text-lg">Login</span>
                        </Link>
                        <Link href="/signup" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                            <UserPlusIcon className="w-6 h-6" />
                            <span className="text-lg">Signup</span>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
