import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import { wishlistReducer } from './wishlistSlice';
import { authReducer } from './authSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        wishlist: wishlistReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
