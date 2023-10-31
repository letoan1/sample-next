'use client';
import { NextPage } from 'next';
import TodoList from '../components/TodoList';
import Header from '../components/Header';

const page: NextPage = () => {
    return (
        <>
            <Header />
            <TodoList />
        </>
    );
};

export default page;
