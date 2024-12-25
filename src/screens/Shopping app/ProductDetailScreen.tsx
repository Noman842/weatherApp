import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'
import Back from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem,addItem } from '../../store/Slice/Slice'


const ProductDetailScreen = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state: any) => state.cart.items)
  const navigation = useNavigation()


  const total = cartItems?.reduce((sum: any, item: any) =>
    sum + (item?.price * item?.quantity || 1)
    , 0)


  return (
    <View style={{ backgroundColor: '#fdeff3', flex: 1, }}>



      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{ height: 42, width: 42, marginLeft: 25, backgroundColor: 'white', borderRadius: 25, marginTop: 35, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Back
              name='chevron-back' size={22} color='#F38181'
            />
          </View></TouchableOpacity>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 23, fontWeight: 600, marginTop: 45, marginLeft: 65 }}>My cart</Text>
        <Image style={{ height: 42, width: 45, borderRadius: 25, marginLeft: 80, marginTop: 35 }} source={require('../../images/profilepic.jpg')} />
      </View>
      <ScrollView>
        {cartItems?.map((item: any) => (
          <View  key={item.id} style={{ flexDirection: 'row', marginTop: 18 }}>

            <Image style={{ height: 190, width: 135, borderRadius: 20, marginLeft: 15 }} source={{uri:item?.image}} />
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginLeft: 14, marginTop: 8, color: 'black', fontSize: 17, fontWeight: 700 }}>{item?.title}</Text>
                <TouchableOpacity onPress={() => dispatch(removeItem(item))}>
                  <Delete
                    style={{ alignSelf: 'flex-end', marginLeft: 7 }}
                    name='delete-outline' color='#C85959' size={23}
                  /></TouchableOpacity>

              </View>
              <Text style={{ color: '#A1A1A1', marginLeft: 14, fontWeight: 600, marginTop: 3 }}>{item?.price}</Text>
              <View style={{ height: 35, width: 35, borderRadius: 22, backgroundColor: '#0B9272', marginLeft: 14, marginTop: 9 }}>
                <View style={{ height: 35, width: 35, borderRadius: 22, backgroundColor: '#EDEAEA', marginLeft: 50, }}>
                  <Text style={{ color: 'black', textAlign: 'center', paddingTop: 4, fontSize: 18, fontWeight: 700 }}>S</Text></View></View>
            </View>
          </View>
        ))}
      </ScrollView>




      {/* For total */}
      <View style={{ marginTop: 85, marginLeft: 15 }}>
        <View style={{ flexDirection: 'row' }}><Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600 }}>Total:</Text>
          <Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600, marginLeft: 160 }}>{total?.toFixed(2)} $</Text></View>
        <View style={{ flexDirection: 'row' }}><Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600 }}>Shipping:</Text>
          <Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600, marginLeft: 165 }}>0.00 $</Text></View>
        <View style={{ flexDirection: 'row' }}><Text style={{ color: 'black', fontSize: 20, fontWeight: 600 }}>Grand Total:</Text>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 600, marginLeft: 100 }}>{total?.toFixed(2)} $</Text></View>
      </View>

      <TouchableOpacity>
        <View style={{ height: 55, width: 360, backgroundColor: '#C85959', marginTop: 21 }}>
          <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 700, color: 'white', marginTop: 11 }}>Checkout</Text>
        </View></TouchableOpacity>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})
