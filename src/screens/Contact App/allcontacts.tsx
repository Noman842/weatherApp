import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList, } from 'react-native'
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'




const allcontacts = () => {
  const [data, setData] = useState([])
  const navigation = useNavigation<any>()
 useFocusEffect(
useCallback(()=>{
  getStoredObjectValue()
},[])
 )

  useEffect(() => {
    getStoredObjectValue()
  }, [])
  const deleteContact = async (index: any) => {
    try {
        const filteredArray = data.filter((_, i) => i !== index)
        setData(filteredArray)
        const jsonValue = JSON.stringify(filteredArray)
        console.log('Contact LIst', jsonValue)
        await AsyncStorage.setItem('CONTACTS', jsonValue)
    } catch (error) {
        console.log('Error', error)
    }
}
 
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

  const renderData = ({ item, index }:any) => {
    return (
      <View style={styles.storeddata}>
        <TouchableOpacity
        style={styles.storeddata}
        onPress={()=>navigation.navigate('Contactinfo', {Save: item})}
        >
              
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./../images/profileicon.jpg')} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.storeddatatxt}>
              {item.ContactName} {item.SurName}
            </Text>
            <Text style={styles.storeddatatxt}>
              {item.PhoneNumber}
            </Text>
          </View>
        </View>
        <TouchableOpacity
                style={{ justifyContent: 'center', }}
                onPress={() => deleteContact(index)}>
                <Icon
                    name="delete-sweep" color="red" size={25} /></TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: 'center',marginLeft:50 }}
        >
          <Icon
            name="call" color="green" size={25}
          />
        </TouchableOpacity>

       
      </View>
    )
  }
  const Emplylist =()=> {
    return data.length !==0 ?
    <FlatList
    data={data}
    renderItem={renderData}
  />:
  <View style={{alignItems:'center',justifyContent:'center' }}>
    <Image source={require('./../images/Group3.png')}/>

  </View>
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <View style={{ flexDirection: 'row', marginLeft: 9, marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="arrow-back" color="black" size={26}
          /></TouchableOpacity>
        <Text style={{ color: 'black', fontSize: 20, marginLeft: 8,marginBottom:15 }}>Back</Text>
      </View>
    <Emplylist/>
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
    marginTop: 20,
    flex: 0.,

  },
  storeddatatxt: {
    color: 'black',
    fontSize: 18,
    textAlignVertical: 'center'
  },
})