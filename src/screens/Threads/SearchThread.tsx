import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import SearchIcon from 'react-native-vector-icons/Feather'


const SearchThread = () => {
  return (
    <View style={styles.body}>
      <View style={{ margin: 16, }}>
        <Text style={styles.title}>Search</Text>
        <View style={{marginVertical:10}}>
          <SearchIcon
          style={{position:'absolute',zIndex:1,top:13,left:10,}}
            name='search' color='gray' size={20}
          />
          <TextInput
            style={styles.Input}
            placeholder='Search'
            placeholderTextColor='gray'
          />
        </View>
      </View>
    </View>
  )
}

export default SearchThread

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#101010',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  Input: {
    height: 45,
    backgroundColor: '#262626',
    borderRadius: 20,
    paddingLeft: 40,
    color: '#fff'
  }
})