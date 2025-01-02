import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Heart from 'react-native-vector-icons/AntDesign'
import CartIcon from 'react-native-vector-icons/FontAwesome'
import DetailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/Slice/Slice'






const CartScreen = ({ route }: any) => {
  // console.log('data is parsing', Data)
  const navigation = useNavigation()
  const { Data } = route.params || {}

  const dispatch = useDispatch();

  const addToCart = () => {
      dispatch(addItem(Data))
  }

// console.log('Data=======>', addItem)
  return (
    <View style={{ backgroundColor: '#fdeff3', flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 30 }}>
        <View style={{ height: 42, width: 42, backgroundColor: 'white', borderRadius: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <DetailIcon
            name='reorder-horizontal' color='#F38181' size={26}
          /></View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Details' as never)}
        >
          <View style={{ backgroundColor: '#fff', borderRadius: 25, height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}>
            <CartIcon
              name='shopping-cart' color='black' size={24}
            /></View></TouchableOpacity>
      </View>


      {Data ?
        <><View style={{ backgroundColor: '#fff', height: 330, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image resizeMode='contain' style={{ height: 300, width: 200, marginTop: 25, borderRadius: 10 }} source={{ uri: Data?.image }} />
        </View><View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22 }}>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 600, marginTop: 25, width: 250 }}>{Data.title}</Text>
              <Text style={{ color: '#A1A1A1', fontSize: 17, fontWeight: 600, marginTop: 28, }}>$ {Data.price}</Text>
            </View>
          </View></> :
          <View style={{justifyContent:'flex-end',height:250}}>
          <Text style={{ color: 'black', textAlign: 'center',fontSize:22 }}>Please select an item!</Text>
          </View>
      }


      <View style={{ height: 55, width: 360, backgroundColor: '#C85959', marginTop: 27, justifyContent: 'center', position: 'absolute', bottom: 0 }}>
        <TouchableOpacity
          onPress={()=>{addToCart();Alert.alert('Item added ✔')}}
        >
          <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 700, color: 'white', }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})