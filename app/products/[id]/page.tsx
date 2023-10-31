import { fetchProduct } from '@/app/apis/product';
import ProductDetail from '@/app/components/ProductDetail';
import { IProduct, Products } from '@/app/interface';
import axios from 'axios';

export async function generateStaticParams() {
    const data = await fetchProduct();
    return data.map((product: Products) => ({
        id: product.id.toString(),
    }));
}

const getProduct = async (id: string) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = await res.data;
    return data;
};

async function Product({ params }: { params: IProduct }) {
    const product = await getProduct(params.id);
    console.log('product', { product });
    return (
        <>
            <ProductDetail product={product} />
        </>
    );
}

export default Product;
