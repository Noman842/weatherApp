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
    const existingItem = state.items?.find((item:any)=>item.id === action.payload.id);
    if(existingItem){
        existingItem.quantity += 1;
      }else{
        state.item.push({...action.payload,quantity:1});
      }
  },
  removeItem: (state:any, action) => {
    state.items = state.items.filter((item:any) => item.id !== action.payload.id);
},
clearCart: (state:any) => {
    state.items = [];
},

    }
})

export const { addItem, removeItem, clearCart } = Stice.actions;
export default Stice.reducer

