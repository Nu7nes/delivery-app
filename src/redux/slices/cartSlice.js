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
            state.items.map(item => item.id !== payload)
        }
    }
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer