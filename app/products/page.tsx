import { NextPage } from 'next';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Link from 'next/link';

const page: NextPage = () => {
    return (
        <>
            <Header />
            <Link href="/wishlist">Go to wishlist</Link>
            <ProductList />
        </>
    );
};

export default page;
