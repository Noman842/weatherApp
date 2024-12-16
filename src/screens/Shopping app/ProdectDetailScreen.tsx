import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ backgroundColor: '#fdeff3', flex:1}}>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 42, width: 42, marginLeft: 25, backgroundColor: 'white', borderRadius: 25, marginTop: 35, flexDirection: 'row' }}>
          <Image style={{ alignSelf: 'center', marginLeft: 9 }} source={require('../../images/Apps.png')} /></View>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 23, fontWeight: 600, marginTop: 45, marginLeft: 65 }}>My cart</Text>
        <Image style={{ height: 42, width: 45, borderRadius: 25, marginLeft: 80, marginTop: 35 }} source={require('../../images/profilepic.jpg')} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 18 }}>
        <Image style={{ height: 190, width: 135, borderRadius: 20, marginLeft: 15 }} source={require('../../images/img5.jpg')} />
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 14, marginTop: 8, color: 'black', fontSize: 17, fontWeight: 700 }}>Striped Red Dress</Text>
            <Image style={{ height: 43, width: 43 }} source={require('../../images/delete.png')} />
          </View>
          <Text style={{ color: '#A1A1A1', marginLeft: 14, fontWeight: 600, marginTop: 3 }}>Rs. 1,499.00</Text>
          <View style={{ height: 35, width: 35, borderRadius: 22, backgroundColor: '#0B9272', marginLeft: 14, marginTop: 9 }}>
            <View style={{ height: 35, width: 35, borderRadius: 22, backgroundColor: '#EDEAEA', marginLeft: 50, }}>
              <Text style={{ color: 'black', textAlign: 'center', paddingTop: 4, fontSize: 18, fontWeight: 700 }}>S</Text></View></View>
        </View>
      </View>

      {/* 2nd Image */}
      <View style={{ flexDirection: 'row', marginTop: 18 }}>
        <Image style={{ height: 190, width: 135, borderRadius: 20, marginLeft: 15 }} source={require('../../images/img2.jpg')} />
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 14, marginTop: 8, color: 'black', fontSize: 17, fontWeight: 700 }}>Striped Pink Dress</Text>
            <Image style={{ height: 43, width: 43 }} source={require('../../images/delete.png')} />
          </View>
          <Text style={{ color: '#A1A1A1', marginLeft: 14, fontWeight: 600, marginTop: 3 }}>Rs. 1,299.00</Text>
          <View style={{ height: 35, width: 35, borderRadius: 22, backgroundColor: '#F28293', marginLeft: 14, marginTop: 9 }}>
            <View style={{ height: 35, width: 35, borderRadius: 22, backgroundColor: '#EDEAEA', marginLeft: 50, }}>
            <Text style={{ color: 'black', textAlign: 'center', paddingTop: 4, fontSize: 18, fontWeight: 700 }}>M</Text></View></View>
        </View>
      </View>

      {/* For total */}
      <View style={{ marginTop: 79, marginLeft: 15 }}>
        <View style={{ flexDirection: 'row' }}><Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600 }}>Total:</Text>
          <Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600, marginLeft: 160 }}>Rs. 2,798.00</Text></View>
        <View style={{ flexDirection: 'row' }}><Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600 }}>Shipping:</Text>
          <Text style={{ color: '#A1A1A1', fontSize: 20, fontWeight: 600, marginLeft: 165 }}>Rs. 0.00</Text></View>
        <View style={{ flexDirection: 'row' }}><Text style={{ color: 'black', fontSize: 20, fontWeight: 600 }}>Grand Total:</Text>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 600, marginLeft: 100 }}>Rs. 2,798.00</Text></View>
      </View>

      <View style={{ height: 55, width: 360, backgroundColor: '#C85959', marginTop: 16 }}>
        <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 700, color: 'white', marginTop: 11 }}>Checkout</Text>
      </View>

      <View style={{ backgroundColor: 'white' }}>
        <Image style={{ height: 60, width: 310, marginLeft: 20 }} source={require('../../images/buttons.png')} />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
