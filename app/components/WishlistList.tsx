'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from './Header';
import Link from 'next/link';
import Image from 'next/image';
import { removeWishlist } from '../store/wishlistSlice';

const WishlistList = () => {
    const wishlists = useSelector((state: RootState) => state.wishlist);
    const dispatch = useDispatch();

    const handleRemove = (wishlistId: number) => {
        dispatch(removeWishlist(wishlistId));
    };

    return (
        <>
            <Header />
            <Link href="/products">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4">
                    Back to Product
                </button>
            </Link>
            <div className="mt-4">
                {!!wishlists.length &&
                    wishlists.map((wishlist) => (
                        <>
                            <div className="flex gap-x-10">
                                <h1 className="text-2xl font-semibold mb-2">{wishlist.title}</h1>
                                <p className="text-2xl font-semibold mb-2">{wishlist.price} $</p>
                            </div>
                            <p className="text-gray-600 mb-4">{wishlist.description}</p>
                            {!!wishlist.images.length && (
                                <div className="flex flex-wrap">
                                    {wishlist.images.map((image, index) => (
                                        <div key={index} className="m-2">
                                            <Image src={image} alt="" width={200} height={200} className="rounded" />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button
                                className="remove-wishlist-button"
                                onClick={() => handleRemove(Number(wishlist.id))}
                            >
                                Remove
                            </button>
                        </>
                    ))}
            </div>
        </>
    );
};

export default WishlistList;
