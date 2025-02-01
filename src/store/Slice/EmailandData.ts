import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    userdata: null,
}

const EmailandData = createSlice({
    name: 'Email',
    initialState,
    reducers: {
        addEmail: ( state: any,action: any,) => {
            state.email = ''
            state.email = action.payload
            console.log('Email store to redux', state.email)
            console.log('Stord to redux',action.payload)

        },
        adduserdata: (state: any,action: any) =>{
             state.userdata = null
             state.userdata = action.payload
        }
    }
})

export const { addEmail,adduserdata } = EmailandData.actions;

export default EmailandData.reducer

