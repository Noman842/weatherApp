import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.body}>
      <View style={{ flexDirection: 'row', height: 100, marginTop: 20, marginLeft: 15 }}>
        <View style={styles.Back}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home' as never)}
          >
            <Back
              name='chevron-back-outline' color="black" size={22}
            /></TouchableOpacity>
        </View>
        <Text style={styles.logintxt}>Cart</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.pic1}></View>
          <View>
            <Text style={styles.sofa}>Sofa</Text>
            <Text style={{ color: 'gray' }}>Color:Black</Text>
            <Text style={{ color: '#007DFC', fontSize: 17 }}>$145</Text>
          </View></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.add}>
            <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>+</Text></View>
          <Text style={{ fontSize: 17, color: 'black', textAlign: 'center', marginHorizontal: 10 }}>01</Text>
          <View style={styles.minus}>
            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center' }}>-</Text></View>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.pic1}></View>
          <View>
            <Text style={styles.sofa}>Sofa</Text>
            <Text style={{ color: 'gray' }}>Color:Black</Text>
            <Text style={{ color: '#007DFC', fontSize: 17 }}>$145</Text>
          </View></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.add}>
            <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>+</Text></View>
          <Text style={{ fontSize: 17, color: 'black', textAlign: 'center', marginHorizontal: 10 }}>01</Text>
          <View style={styles.minus}>
            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center' }}>-</Text></View>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.pic1}></View>
          <View>
            <Text style={styles.sofa}>Sofa</Text>
            <Text style={{ color: 'gray' }}>Color:Black</Text>
            <Text style={{ color: '#007DFC', fontSize: 17 }}>$145</Text>
          </View></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.add}>
            <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>+</Text></View>
          <Text style={{ fontSize: 17, color: 'black', textAlign: 'center', marginHorizontal: 10 }}>01</Text>
          <View style={styles.minus}>
            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center' }}>-</Text></View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.addmore}><Text style={styles.addmoretxt}>Add more</Text></View>
      </TouchableOpacity>
      <View style={styles.line}></View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
        <Text style={{ color: 'black' }}>Total:</Text>
        <Text style={{ color: '#007DFC', fontSize: 17 }}>$335</Text>
      </View>

<TouchableOpacity
onPress={()=>navigation.navigate('Checkout'as never)}
>
      <View style={styles.checkout}>
        <Text style={{color:'#fff',textAlign:'center',fontSize:17}}>Check Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  Back: {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: 'lightgray',
    justifyContent: "center",
    alignItems: 'center'
  },
  logintxt: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    marginLeft: 110,
  },
  pic1: {
    height: 90,
    width: 90,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  sofa: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 18
  },
  add: {
    height: 20,
    width: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center'
  },
  minus: {

    height: 20,
    width: 20,
    backgroundColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray'
  },
  line: {
    marginVertical: 15,
    borderBottomWidth: 1.5,
    borderColor: 'lightgray'
  },
  addmore: {
    marginTop: 15,
    marginHorizontal: 20,
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    justifyContent: 'center'

  },
  addmoretxt: {
    color: 'black',
    fontSize: 17,
    textAlign: 'center'
  },
  checkout:{
    height:50,
    backgroundColor:'black',
    marginHorizontal:15,
    borderRadius:10,
    marginTop:30,
    justifyContent:'center'
  }
})