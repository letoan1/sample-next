'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../apis/product';
import { Products } from '../interface';
import Image from 'next/image';

const ProductList = () => {
    const [productList, setProductList] = useState<Products[]>([]);

    useEffect(() => {
        (async function () {
            const data = await fetchProduct();
            setProductList(data);
        })();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productList.map((product) => (
                    <div key={product.id} className="border p-4 shadow-md rounded-md">
                        <p className="text-lg font-bold mb-2">{product.title}</p>
                        <p className="text-gray-600">{product.price} $</p>
                        <Image src={product.thumbnail} alt="" width={200} height={200} />
                        <Link href={`products/${product.id}`}>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Go to Detail
                            </button>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
