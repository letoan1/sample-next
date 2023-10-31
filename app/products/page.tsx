import { GetServerSideProps, NextPage } from 'next';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const page: NextPage = () => {
    return (
        <>
            <Header />
            <ProductList />
        </>
    );
};

export default page;
