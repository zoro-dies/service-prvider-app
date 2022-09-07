import {createSlice} from "@reduxjs/toolkit"

export const menuSlice = createSlice({

    name : 'menu',
    initialState : {
        value : "closed"
    },

    reducers : {

        open: (state) =>{
            state.value = "opened"
        },
        close:(state)=>{
            state.value = "closed"
        }
    }
})

export const {open, close} = menuSlice.actions
export default menuSlice.reducer