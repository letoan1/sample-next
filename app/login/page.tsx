/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import { RootState } from '../store';
import { useRouter } from 'next/navigation';

const page = () => {
    const authLogin = useSelector((state: RootState) => state.auth);
    const router = useRouter();
    React.useEffect(() => {
        !authLogin ? router.push('/') : router.push('/login');
    }, [authLogin, router]);
    console.log('da', authLogin);

    return (
        <div>
            <Login />
        </div>
    );
};

export default page;
