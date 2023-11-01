import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggin: false,
    },
    reducers: {
        login: (state) => {
            state.isLoggin = true;
        },
        logout: (state) => {
            state.isLoggin = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
