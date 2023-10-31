'use client';
import Image from 'next/image';
import { IProduct } from '../interface';
import Header from './Header';
import Link from 'next/link';

const ProductDetail = ({ product }: { product: IProduct }) => {
    return (
        <>
            <Header />
            <Link href="/products">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4">
                    Back to Product
                </button>
            </Link>
            <div className="mt-4">
                <div className="flex gap-x-10">
                    <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
                    <p className="text-2xl font-semibold mb-2">{product.price} $</p>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {!!product.images.length && (
                    <div className="flex flex-wrap">
                        {product.images.map((image, index) => (
                            <div key={index} className="m-2">
                                <Image src={image} alt="" width={200} height={200} className="rounded" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductDetail;
