'use client';

import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const Page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            router.push('/');
        } catch (error) {
            console.log('Login Failed: ', error);
        }
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100 text-black font-black'>

            <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md'>
                <h1 className='text-2xl mb-4 '>Login</h1>

                <div className='mb-4'>
                    <label className='block mb-2'>Email</label>

                    <input
                        type='email'
                        className='w-full p-2 border rounded'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label className='block mb-2'>Password</label>

                    <input
                        type='password'
                        className='w-full p-2 border rounded'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='w-full bg-blue-600 text-white p-2 rounded'>Login</button>
            </form>
        </div>
    )
}

export default Page