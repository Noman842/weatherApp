import { Image, requireNativeComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: '#fdeff3', flex: 1}}>
      <View style={{ marginLeft: 25 }}>
        <View style={{ height: 42, width: 42, backgroundColor: 'white', borderRadius: 25, marginTop: 35, flexDirection: 'row' }}>
          <Image style={{ alignSelf: 'center', marginLeft: 9 }} source={require('../../images/Apps.png')} />
          <Image style={{ height: 42, width: 45, borderRadius: 25, marginLeft: 240 }} source={require('../../images/profilepic.jpg')} />
        </View>

        <Text style={{ color: 'black', fontSize: 30, marginLeft: 5, marginTop: 18,fontWeight:400 }}>Match your style</Text>
        <View style={{ height: 36, width: 300, backgroundColor: 'white', borderRadius: 19, marginTop: 15 }}>
          <Text style={{ color: 'gray', fontSize: 16, paddingLeft: 20, paddingTop: 6 }}>Search</Text></View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Text style={{ height: 32, width: 120, backgroundColor: '#F38181', color: 'white', fontSize: 15, fontWeight: 600, borderRadius: 19, padding: 5, paddingLeft: 13 }}>Trending Now</Text>
          <Text style={{ color: '#8A8A8A', marginLeft: 17, height: 32, width: 71, backgroundColor: '#E9E6E6', borderRadius: 19, padding: 5, paddingLeft: 25 }}>All</Text>
          <Text style={{ color: '#8A8A8A', marginLeft: 17, height: 32, width: 71, backgroundColor: '#E9E6E6', borderRadius: 19, padding: 5, paddingLeft: 22 }}>New</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 4, marginTop: 24 }}>
        <Image style={{ height: 207, width: 147, borderRadius: 23 }} source={require('../../images/img1.jpg')} />
        <Image style={{ height: 207, width: 147, borderRadius: 23 }} source={require('../../images/img2.jpg')} />
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', marginRight: 18 }}>
        <Text style={{ color: 'black', fontWeight: 600, fontSize: 15 }}>Polkadot Red Dress</Text>
        <Text style={{ color: 'black', fontWeight: 600, fontSize: 15 }}>Polkadot Pink Dress</Text>
      </View>

      <View style={{flexDirection:'row',marginLeft:22}}>
        <Text style={{color:'#757575',fontSize:15,fontWeight:600,marginTop:7}}>Rs. 1,499.00</Text>
        <Text style={{color:'#757575',fontSize:15,fontWeight:600,marginLeft:89,marginTop:7}}>Rs. 1,299.00</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 4, marginTop: 20,flex:0.93 }}>
        <Image style={{ height: 207, width: 147, borderRadius: 23 }} source={require('../../images/img3.jpg')} />
        <Image style={{ height: 207, width: 147, borderRadius: 23 }} source={require('../../images/img4.jpg')} />
      </View>

      <View style={{ backgroundColor: 'white' }}>
           <Image style={{ height: 60, width: 310, marginLeft: 20 }} source={require('../../images/buttons.png')}/>
       </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})