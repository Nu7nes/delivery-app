import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    orders: [
        // {id:'05', items: [], timestamp: '2345466234'}
    ]
}

export const orderSlice = createSlice({
    name: 'orderList',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.orders.push(payload)
        },
        // remove: (state, { payload }) => {
        //     state.items.splice(payload, 1);
        // }
    }
})

export const { add } = orderSlice.actions

export default orderSlice.reducer