import { Image, NativeModules, requireNativeComponent, StyleSheet, Text, View, TextInput, Alert, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Profile from 'react-native-vector-icons/MaterialIcons'
import DetailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { launchImageLibrary } from 'react-native-image-picker'
import Heart from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'


const HomeScreen = ({ route }: any) => {
  const [Productapi, setproductapi] = useState()
  const [jewelery, setJewelery] = useState()
  const [isLoading, setIsLoading] = useState<any>(true)
  const [error, setError] = useState<any>(null);

  const SelectedImage = route.param
  // console.log('Data passing', Image)
  const navigation = useNavigation<any>()

  useEffect(() => {
    getData();
    getjewelery()
  }, [])


  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics');
      // console.log('Image' ,JSON.stringify(response))
      const data = await response.json()
      // console.log('data=========>',data)
      if (response.ok) {
        setproductapi(data);
        setIsLoading(false)
      } else {
        Alert.alert('Error occur')
        console.log('API is fatching', error)
      }

    } catch (error: any) {
      setError(error.message);
    }

  }


  const getjewelery = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
      // console.log('Image' ,JSON.stringify(response))
      const data = await response.json()
      console.log('data=========>', data)
      if (response.ok) {
        setJewelery(data);
        setIsLoading(false)
      } else {
        Alert.alert('Error occur')
      }

    } catch (error: any) {
      setError(error.message);
    }

  }


  // console.log('data===========>',data.)
  const renderdata = ({ item }: any) => {
    return (
      <View style={{ justifyContent: 'space-between', marginHorizontal: 15 }}>
        {
          isLoading ?

            <ActivityIndicator style={{ backgroundColor: 'red', height: 20, alignSelf: 'center' }} size='large' color='black' /> :
            <>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CartScreen' as never,
                    { Data: item }
                  )}
                >
                  <View>
                    <View style={{ height: 220, width: 170, backgroundColor: '#fff', alignItems: 'center' }}>
                      <Image resizeMode='contain' style={{ height: 207, width: 147, borderRadius: 20 }}
                        source={{ uri: item?.image }} />
                    </View>
                    <Text style={styles.titalname}>{item?.title}</Text>
                    <Text style={styles.price}>$ {item?.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
        }

      </View>
    )
  }


  const renderjewlery = ({ item }: any) => {
    return (
      <View style={{ justifyContent: 'space-between', marginHorizontal: 15 }}>
        {
          isLoading ?
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 20 }}>
              <ActivityIndicator style={{ height: 20, alignSelf: 'center' }} size='large' color='blue' /></View> :
            <>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CartScreen' as never,
                    { Data: item }
                  )}
                >
                  <View>
                    <View style={{ height: 220, width: 170, backgroundColor: '#fff', alignItems: 'center' }}>
                      <Image resizeMode='contain' style={{ height: 207, width: 147, borderRadius: 20 }}
                        source={{ uri: item?.image }} /></View>
                    <Text style={styles.titalname}>{item?.title}</Text>
                    <Text style={styles.price}>$ {item?.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
        }

      </View>
    )
  }

  return (
    <View style={{ backgroundColor: '#fdeff3', flex: 1 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 35, marginHorizontal: 25 }}>
        <View style={{ height: 42, width: 42, backgroundColor: 'white', borderRadius: 25, justifyContent: "center", alignItems: 'center' }}>
          <DetailIcon
            name='reorder-horizontal' color='#F38181' size={26}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Settings' as never)}
        >
          {SelectedImage ?
            SelectedImage &&
            <Image style={{ height: 42, width: 42, borderRadius: 35 }} source={{ uri: SelectedImage }} /> :
            <Profile
              name='account-circle' size={45} color='gray'
            />
          }
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 25 }}>

        <Text style={{ color: 'black', fontSize: 30, marginLeft: 5, marginTop: 18, fontWeight: 400 }}>Match your style</Text>
        <TextInput
          style={styles.Textinput}
          placeholder='Search'
          placeholderTextColor='gray'
        />
        <View style={{ flexDirection: 'row', marginVertical: 15 }}>
          <Text style={{ height: 32, width: 120, backgroundColor: '#F38181', color: 'white', fontSize: 15, fontWeight: 600, borderRadius: 19, padding: 5, paddingLeft: 13 }}>Trending Now</Text>
          <Text style={{ color: '#8A8A8A', marginLeft: 17, height: 32, width: 71, backgroundColor: '#E9E6E6', borderRadius: 19, padding: 5, paddingLeft: 25 }}>All</Text>
          <Text style={{ color: '#8A8A8A', marginLeft: 17, height: 32, width: 71, backgroundColor: '#E9E6E6', borderRadius: 19, padding: 5, paddingLeft: 22 }}>New</Text>
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={Productapi}
          renderItem={renderdata}
          horizontal={true}
        />
        <FlatList
          style={{ marginTop: 10 }}
          data={jewelery}
          renderItem={renderjewlery}
          horizontal={true}
        /></ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  titalname: {
    color: 'black',
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 7,
    width: 150,
  },
  price: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500'
  },
  Textinput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 35,
    marginVertical: 10,
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    marginRight: 25,
    paddingTop: 6
  },


})