import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAllDataFetch = createAsyncThunk('getAllDataFetch', async ({page = 0, query = '', search = false})=> {
    return await fetch(`https://evrtourback.uz/api/v1/user/get?page=${page}&q=${query}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
        }
    }).then((res)=> res.json())
        .then((json)=> {
            return{
                ...json,
                search
            }
        })

})

const getAllData = createSlice({
    name: 'getAllData',
    initialState: {
        status: null,
        message: '',
        pageCount: 0,
        data: []
    },
    extraReducers: {
        [getAllDataFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getAllDataFetch.fulfilled]: (state, {payload})=> {
            if(payload.search){
                if(payload.success === true && payload.data.length) {
                    state.status = 'success'
                    state.data = payload.data
                }
                else if(payload?.success === false){
                    state.status = 'warning'
                }
            }else{
                if(payload.success === true && payload.data.length) {
                    state.status = 'success'
                    state.data = [...state.data, ...payload.data]
                }
                else if(payload?.success === false){
                    state.status = 'warning'
                }
            }
        },
        [getAllDataFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers: {
        addPageCount(state, action){
            state.pageCount = state.pageCount+1
        }
    }
})



export const { addPageCount } = getAllData.actions
export default getAllData.reducer