import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    loading: false,
    error: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})


export const { setUser, setLoading, setError , setToken } = userSlice.actions;

export default userSlice.reducer;