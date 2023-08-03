import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        loginscreen: 'admin'
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            state.items = state.items.filter((item) => {
                return item.name !== itemToRemove.name
            });
        },
        clearCart: (state) => {
            state.items = [];
        },

        setLoginScreen: (state, action) => {
            state.loginscreen = action.payload
        }
    }
})

export const { addItem, removeItem, clearCart , setLoginScreen} = cartSlice.actions;
export default cartSlice.reducer;