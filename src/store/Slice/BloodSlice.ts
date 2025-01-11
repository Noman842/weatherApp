import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    UserEmail: '',
    userdata: null,
}

const BloodSlice = createSlice({
    name: 'Blood',
    initialState,
    reducers: {
        addUserEmail: (state: any, action: any,) => {
            state.UserEmail = ''
            state.UserEmail = action.payload
            console.log('Email store to redux', state.UserEmail)
            console.log('Stord to redux', action.payload)

        },
        adduserBlood: (state: any, action: any) => {
            state.userdata = null
            state.userdata = action.payload
        }
    }
})

export const { addUserEmail, adduserBlood } = BloodSlice.actions;

export default BloodSlice.reducer

