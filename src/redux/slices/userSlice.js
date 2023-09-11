import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    isAdmin: false,
    user: {}
}

export const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload
            state.isLogged = true
            if(payload.email === 'admin') state.isAdmin = true
        },
        logout: (state) => {
            state.user = {}
            state.isLogged = false
            state.isAdmin = false
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer