import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loginFetch = createAsyncThunk('loginFetch', async ({userName, password})=> {

    // return await fetch(``, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify({userName: userName.match(/[0-9]+/g).join(''), password}),
    // }).then((res)=> res.json())
})


const login = createSlice({
    name: 'login',
    initialState: {
        status: null,
        message: '',
    },
    extraReducers: {
        [loginFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [loginFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
                localStorage.setItem('accessToken', payload.data.accessToken)
            }
            else if(payload?.success === false){
                state.status = 'warning'
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [loginFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default login.reducer