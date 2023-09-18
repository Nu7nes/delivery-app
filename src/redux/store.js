import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import cartSlice from './slices/cartSlice'
import orderSlice from './slices/orderSlice'

export default configureStore({
    reducer: {
        currentUser: userSlice,
        cartContent: cartSlice,
        orderList : orderSlice
        // modalHandler: modalSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})