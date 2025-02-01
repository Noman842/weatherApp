import { StyleSheet, Text, View } from 'react-native'
import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'



const initialState = {
  item: [],
};

const Stice = createSlice({

  name: 'cart',
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      const existingItem = state.item?.find((item: any) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state: any, action) => {
      state.item = state.item?.filter((item: any) => item.id !== action.payload.id);
    },
    clearCart: (state: any) => {
      state.item = [];
    },

    Imageupdate: (state: any, action: any) => {
      const openImagePicker = () => {
        const options: any = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };


      };
    },

  }
})

export const { addItem, removeItem, clearCart } = Stice.actions;
export default Stice.reducer

