import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Stars from 'react-native-vector-icons/FontAwesome'

const InputText = (props:any) => {
    const {value, setValue,placeholder,keyboardType}=props
  return (
    <View>
         <TextInput
            style={styles.name}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={'gray'}
          
          />
            {/* <Stars 
            style={{ alignSelf: 'center' }}
            name={'star'} color='yellow' size={20}/> */}
    </View>
  )
}

export default InputText

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