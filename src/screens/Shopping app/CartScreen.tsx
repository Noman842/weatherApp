import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <View style={{ backgroundColor: '#fdeff3', flex:1 }}>
      <View style={{ height: 42, width: 42, marginLeft: 25, backgroundColor: 'white', borderRadius: 25, marginTop: 35, flexDirection: 'row' }}>
        <Image style={{ alignSelf: 'center', marginLeft: 8 }} source={require('../../images/Apps.png')} />
        <Image style={{ height: 42, width: 45, borderRadius: 25, marginLeft: 235 }} source={require('../../images/profilepic.jpg')} />
      </View>
      <Image style={{ height: 273, width: 365, marginTop: 25 }} source={require("../../images/img2.jpg")} />
      <View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 600, marginLeft: 28, marginTop: 25, }}>Striped Pink Dress</Text>
          <Text style={{ color: '#A1A1A1', fontSize: 17, fontWeight: 600, marginLeft: 39, marginTop: 28, }}>Rs. 1,299.0</Text>
        </View>

        <Text style={{ color: 'black', fontSize: 20, fontWeight: 600, marginLeft: 28, marginTop: 24, }}>Size</Text>
        <View style={{ flexDirection: 'row', marginLeft: 26 }}>
          <View style={{ height: 45, width: 45, backgroundColor: 'white', borderRadius: 25, marginTop: 15 }}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, fontWeight: 600, paddingTop: 8 }}>XL</Text></View>
          <View style={{ height: 45, width: 45, backgroundColor: 'white', borderRadius: 25, marginTop: 15, marginLeft: 10 }}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, fontWeight: 600, paddingTop: 8 }}>S</Text></View>
          <View style={{ height: 45, width: 45, backgroundColor: 'white', borderRadius: 25, marginTop: 15, marginLeft: 10 }}>
            <Text style={{ color: '#F03350', textAlign: 'center', fontSize: 20, fontWeight: 600, paddingTop: 8 }}>M</Text></View>
          <View style={{ height: 45, width: 45, backgroundColor: 'white', borderRadius: 25, marginTop: 15, marginLeft: 10 }}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, fontWeight: 600, paddingTop: 8 }}>L</Text></View>
        </View>

        <Text style={{ color: 'black', fontSize: 20, fontWeight: 600, marginLeft: 28, marginTop: 23}}>Color</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: 50, width: 50, backgroundColor: '#F28293', borderRadius: 25, marginTop: 15, marginLeft: 26 }}></View>
          <View style={{ height: 50, width: 50, backgroundColor: '#97CBE2', borderRadius: 25, marginTop: 15, marginLeft: 10 }}></View>
          <View style={{ height: 50, width: 50, backgroundColor: '#D77F4E', borderRadius: 25, marginTop: 15, marginLeft: 10 }}></View>
        </View>

        <View style={{ height: 55, width: 360, backgroundColor: '#C85959', marginTop: 16 }}>
          <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 700, color: 'white', marginTop: 11 }}>Add to cart</Text>
        </View>

        <View style={{ backgroundColor: 'white' }}>
          <Image style={{ height: 60, width: 310, marginLeft: 20 }} source={require('../../images/buttons.png')} />
        </View>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})