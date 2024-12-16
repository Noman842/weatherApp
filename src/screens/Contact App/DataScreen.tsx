import { Alert, Image, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputText from './../../components/InputText'

export const DataScreen = () => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [number, setNumber] = useState('')
  const [data, setData] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    getStoredObjectValue()
  }, [])

  const SaveData = () => {
    if (name !== '' && number !== '') {
      const dataArray = [...data, { ContactName: name, SurName: surname, PhoneNumber: number }]
      console.log('Data', dataArray)
      storeObjectValue(dataArray)
      setData(dataArray as any)
      setName('')
      setSurname('')
      setNumber('')
      navigation.navigate('AllContacts' as never)
    }
    else {
      Alert.alert('Please fill the required info.')
    }
  }
  const storeObjectValue = async (dataList: any) => {
    try {
      const jsonValue = JSON.stringify(dataList)
      console.log('Contact LIst', dataList)
      await AsyncStorage.setItem('CONTACTS', jsonValue)
      console.log('Your value stored')
    } catch (error) {
      console.log('Error', error)
    }
  }
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

  // const renderData = ({ item, index }: any) => {
  const renderData =({index}:any)=>{
  //   return (
  //     <View style={styles.storeddata}>
  //       <View style={{ flexDirection: 'row' }}>
  //         <Image source={require('./../images/profileicon.jpg')} />
  //         <View style={{ flexDirection: 'column' }}>
  //           <Text style={styles.storeddatatxt}>
  //             {item.ContactName} {item.SurName}
  //           </Text>
  //           <Text style={styles.storeddatatxt}>
  //             {item.PhoneNumber}
  //           </Text>
  //         </View>
  //       </View>
  //       <TouchableOpacity
  //         style={{ justifyContent: 'center' }}
  //       >
  //         <Icon
  //           name="call" color="green" size={25}
  //         />
  //       </TouchableOpacity>
        
        <TouchableOpacity 
        style={{justifyContent:'center'}}
        onPress={() => deleteContact(index)}>
         <Icon
         name="delete-sweep" color="red" size={25}/>
        </TouchableOpacity>}
  //     </View>
  //   )
  // }
  return (
    <View style={styles.body}>
      <View style={{ height: 390 }}>
        <View style={styles.mainnametop}>
          <Text style={styles.titalname}>Name:</Text>
          {/* <TextInput
            style={styles.name}
            value={name}
            onChangeText={setName}
            placeholder='Enter name'
            placeholderTextColor={'gray'}
          /> */}
          <InputText value={name} setValue={setName} placeholder='Enter Name'/>
        </View>

        <View style={styles.mainname}>
           <Text style={styles.titalname}>Surname:</Text>
         {/* <TextInput
            style={styles.name}
            value={surname}
            onChangeText={setSurname}
            placeholder='Enter surname (Optional)'
            placeholderTextColor={'gray'}
          /> */}
          <InputText value={surname} setValue={setSurname} placeholder='Enter SurName(optional)'/>
        </View>

        <View style={styles.mainname}>
          <Text style={styles.titalname}>Phone Number:</Text>
          {/* <TextInput
            style={styles.name}
            value={number}
            onChangeText={setNumber}
            placeholder='+923__-________'
            placeholderTextColor={'gray'}
            keyboardType='phone-pad'
          /> */}
          <InputText value={number} setValue={setNumber} placeholder='+923__-_______' keyboardType='phone-pad'/>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={SaveData}
            style={styles.button}
          >
            <Text style={styles.buttontxt}>Save Data</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <FlatList
      data={data}
      renderItem={renderData}
      /> */}
    </View>
  )
}

export default DataScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  header: {
    height: 70,
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row',

  },
  headertxt: {
    color: 'black',
    fontSize: 21,
    fontWeight: '500',
    marginLeft: 16,

  },
  titalname: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Poppins-Regular'
  },
  mainnametop: {
    marginLeft: 10,
    marginVertical: 10,
    marginTop: 40
  },
  mainname: {
    marginLeft: 10,
    marginVertical: 10,
  },
  name: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#fafafa',
    color: 'black',
    marginRight: 10,
    marginTop: 5
  },
  button: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    width: '40%',
    borderRadius: 4,
    justifyContent: 'center'
  },
  buttontxt: {
    textAlign: 'center',
    color: 'gray'
  },
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
  storeddataimage: {
    marginTop: 8
  }
})