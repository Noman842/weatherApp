import { StyleSheet, Text, View } from 'react-native'
import { createSlice } from '@reduxjs/toolkit'
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react'


  const [selectedImage, setSelectedImage] = useState<any>(null)

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

 Imageupdate:(state:any,action:any) =>{
  const openImagePicker = () => {
    const options:any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
 },

    }
})

export const { addItem, removeItem, clearCart,Imageupdate } = Stice.actions;
export default Stice.reducer

