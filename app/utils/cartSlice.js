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
            console.log('redux state items', itemToRemove)
        },
        clearCart: (state) => {
            state.items = [];
            console.log("cart cleared")
        },

        setLoginScreen: (state, action) => {
            state.loginscreen = action.payload
            console.log("login reducer", state.loginscreen)
        }
    }
})

export const { addItem, removeItem, clearCart , setLoginScreen} = cartSlice.actions;
export default cartSlice.reducer;