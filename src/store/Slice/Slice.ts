import { StyleSheet, Text, View } from 'react-native'
import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    item:[],
};

const Stice = createSlice ({
    name:'cart',
    initialState ,
    reducers:{
  addItem:(state:any,action:any) =>{
    const existingItem = state.item?.find((item:any)=>item.id === action.payload.id);
    if(existingItem){
        existingItem.quantity += 1;
      }else{
        state.item.push({...action.payload,quantity:1});
      }
  },
  removeItem: (state:any, action) => {
    state.item = state.item?.filter((item:any) => item.id !== action.payload.id);
},
clearCart: (state:any) => {
    state.item = [];
},

    }
})

export const { addItem, removeItem, clearCart } = Stice.actions;
export default Stice.reducer

