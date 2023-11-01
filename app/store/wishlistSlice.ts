import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../interface';

const initialState: IProduct[] = JSON.parse(localStorage.getItem('wishlist') || '[]');

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWishlist: (state, action: PayloadAction<IProduct>) => {
            state.unshift(action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state));
        },
        removeWishlist: (state, action: PayloadAction<number>) => {
            const updateWishlist = state.filter((wishlist) => Number(wishlist.id) !== action.payload);
            localStorage.setItem('wishlist', JSON.stringify(updateWishlist));
            return updateWishlist;
        },
    },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
