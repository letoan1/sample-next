'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../apis/product';
import { IProduct } from '../interface';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addWishlist } from '../store/wishlistSlice';
import { AppDispatch } from '../store';

const ProductList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [productList, setProductList] = useState<IProduct[]>([]);

    useEffect(() => {
        (async function () {
            const data = await fetchProduct();
            setProductList(data);
        })();
    }, []);

    const handleAddToWishlist = (product: IProduct) => {
        dispatch(addWishlist(product));
    };

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
                        <button
                            className="btn-wishlist mt-4 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                            onClick={() => handleAddToWishlist(product)}
                        >
                            Add wishlist
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
