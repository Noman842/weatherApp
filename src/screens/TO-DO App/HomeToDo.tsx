import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Delete from 'react-native-vector-icons/AntDesign'
import Edit from 'react-native-vector-icons/Feather'
import CheckBox from '@react-native-community/checkbox'

const HomeToDo = () => {
  const navigation = useNavigation<any>()
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [isrefresh, setIsrefresh] = useState(false)
  const [checked, setChecked] = React.useState<any>(false);



  useFocusEffect(
    useCallback(() => {
      GotStoredValue()
    }, [])
  )

  useEffect(() => {
    GotStoredValue()
  }, [])

  const GotStoredValue = async () => {
    try {
      const Value = await AsyncStorage.getItem('TODOITEMS')
      const StoredData = JSON.parse(Value as any)
      setItems(StoredData as any)
      console.log('GotStoredData', StoredData)
    } catch (error) {
      console.log('Error', error)
    }
  }

  const Deleted = async (index: any) => {
    try {
      const filteredArray = items.filter((_, i) => i !== index)
      setItems(filteredArray)
      const jsonValue = JSON.stringify(filteredArray)
      console.log('Contact LIst', jsonValue)
      await AsyncStorage.setItem('TODOITEMS', jsonValue)
    } catch (error) {
      console.log('Error', error)
    }
  }

  const renderlist = ({ item, index }: any) => {
    return (
      <TouchableOpacity 
      onPress={()=>navigation.navigate('ToDoDetail')}
      style={styles.flatlist}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text selectable={true} style={styles.title}>{item.Title}</Text>
            <Text selectable={true}  style={styles.text}>{item.Detail}</Text>
          </View>

          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={() => Deleted(index)}
          >
            <Delete
              name='delete' color='#9395D3' size={20}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: 'center', }}
            onPress={() => navigation.navigate('ToDoInput' as never,
              { item: item }
            )}
          >
            <Edit
              name='edit-2' color='#9395D3' size={20}
            />
          </TouchableOpacity>
          {/* <CheckBox
           
            style={{ alignSelf: 'center' }}
            value={checked}
            onValueChange={setChecked}
            tintColors={{ true: '#9395D3', false: '#9395D3', }}
          /> */}

        </View>
      </TouchableOpacity>
    )
  }

  //   const handleSearch = (text: any) => {
  //     setSearch(text);
  //   };

  //   const filteredItems = items.filter(item =>
  //     item.Title.toLowerCase().includes(search.toLowerCase())
  // );


  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.header}>
        <Text style={styles.headertxt}>To-Do List</Text>
      </View>

      {/* <TextInput
        style={styles.search}
        value={search}
        onChangeText={handleSearch}
        placeholder='Search by title'
        placeholderTextColor='gray'
      /> */}

      <FlatList
        data={items}
        renderItem={renderlist}
        refreshing={isrefresh}
        onRefresh={GotStoredValue}
      />


      <TouchableOpacity
        onPress={() => navigation.navigate('ToDoInput' as never)}
        style={styles.add}><Text style={styles.addtxt}>+</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeToDo

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgb(225, 226, 237)'
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#9395D3',
    justifyContent: 'center'
  },
  headertxt: {
    color: '#fff',
    fontSize: 22,
    marginTop: 10,
    fontWeight: '500',
    marginLeft: 16,
    fontFamily: 'Poppins-Medium'
  },
  add: {
    height: 60,
    width: 60,
    position: 'absolute',
    borderRadius: 40,
    backgroundColor: '#9395D3',
    elevation: 3,
    bottom: 50,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addtxt: {
    fontSize: 28,
    color: '#fff',
  },
  flatlist: {
    height: 80,
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
    marginVertical: 16,
    justifyContent: 'center',
    padding: 15
  },
  title: {
    color: '#9395D3',
    fontSize: 17,
    fontWeight: '500',
    width: 200,
    height: 22,
  },
  text: {
    color: 'black',
    width: 200,
    height: 17,
  },
  search: {
    height: 40,
    width: '95%',
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginVertical: 10,
  },
})