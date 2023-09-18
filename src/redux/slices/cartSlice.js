import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        // {id:'05', adicionais: [], removiveis: []}
    ]
}

export const cartSlice = createSlice({
    name: 'cartContent',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.items.push(payload)
        },
        remove: (state, { payload }) => {
            state.items.splice(payload, 1);
        },
        endOrder: (state) => {
            state.items = [];
        }
    }
})

export const { add, remove, endOrder } = cartSlice.actions

export default cartSlice.reducer