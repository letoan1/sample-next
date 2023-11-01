'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Link from 'next/link';

export default function Home() {
    const authLogin = useSelector((state: RootState) => state.auth);

    return (
        <>
            <main className="wrapper">
                <h1>Welcome back ! ✨</h1>
                {authLogin ? (
                    <>
                        <Link href="/todo">Welcome to todo lỏ Nextjs</Link>
                        <Link href="/products">Products</Link>
                    </>
                ) : (
                    <Link href="/login">U must login first 🙌</Link>
                )}
            </main>
        </>
    );
}
