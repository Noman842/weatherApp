import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'


const LoginFurniture = (props: any) => {
    const {name,placeholder}=props
  return (
    <View>
        <TextInput
        style={styles.name}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        />
    </View>
  )
}

export default LoginFurniture

const styles = StyleSheet.create({
  name: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#fafafa',
    color: 'black',
    marginRight: 10,
    marginTop: 5
  },

})