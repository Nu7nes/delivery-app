import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import cartSlice from './slices/cartSlice'

export default configureStore({
    reducer: {
        currentUser: userSlice,
        cartContent: cartSlice,
        // modalHandler: modalSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})