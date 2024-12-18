import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList, } from 'react-native'
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'





const allcontacts = () => {
  const [data, setData] = useState([])
  const navigation = useNavigation<any>()
  useFocusEffect(
    useCallback(() => {
      getStoredObjectValue()
    }, [])
  )

  useEffect(() => {
    getStoredObjectValue()
  }, [])


  const getStoredObjectValue = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('CONTACTS')
      const storeddataList = JSON.parse(jsonValue as any)
      setData(storeddataList as any)
      console.log('Got Stored Value', storeddataList)
    } catch (error) {
      console.log('Error', error)
    }
  }

  const renderData = ({ item, index }: any) => {
    return (
      <View style={styles.storeddata}>
        <TouchableOpacity
          style={styles.storeddata}
          onPress={() => navigation.navigate('Contactinfo', { Save: item, index })}
        >

          <View style={{ flexDirection: 'row' }}>
            {item.Image ? item.Image &&
              <Image style={{ height: 45, width: 45, borderRadius: 25, }} source={{ uri: item.Image }} /> :
              <Icon1 name="account-circle" size={51} color="grey" />
            }

            <View style={{ flexDirection: 'column',marginLeft:5 }}>
              <Text style={styles.storeddatatxt}>
                {item.ContactName} {item.SurName}
              </Text>
              <Text style={styles.storeddatatxt}>
                {item.PhoneNumber}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: 'center', marginLeft: 50 }}
        >
          <Icon
            name="call" color="green" size={25}
          />
        </TouchableOpacity>


      </View>
    )
  }
  const Emplylist = () => {
    return data.length !== 0 ?
      <FlatList
        data={data}
        renderItem={renderData}
      /> :
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30,alignSelf:'center' }}>
        <Image style={{alignSelf:'center'}} source={require('./../../images/Group3.png')} />

      </View>
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fafafa', }}>
      <View style={{ height: 60, backgroundColor: '#fff', justifyContent: 'center', marginLeft: 15 }}>
        <Text style={{ color: 'black', fontSize: 22, fontWeight: '500' }}>All Contacts</Text>
      </View>
      <Emplylist />
      <View style={{ alignItems: 'flex-end', justifyContent: 'center', right:50,bottom:100, flex: 1, position: 'absolute' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddContact' as never)}
          style={{ height: 55, width: 55, borderRadius: 30, backgroundColor: '#00B2FF', justifyContent: 'center' }}
        >
          <Text style={{ color: '#fff', fontSize: 29, textAlign: 'center' }}>
            +
          </Text>
        </TouchableOpacity></View>
    </View>
  )
}

export default allcontacts

const styles = StyleSheet.create({

  storeddata: {
    backgroundColor: 'transperant',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 20,
    marginTop: 12,
    marginBottom:7,
    flex: 0.,

  },
  storeddatatxt: {
    color: 'black',
    fontSize: 18,
    textAlignVertical: 'center'
  },
})