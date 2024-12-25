import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Cross from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native'


const EditProfile = () => {
    const navigation=useNavigation()
  return (
    <View>
        <View style={{flexDirection:'row',margin:20,width:200,justifyContent:'space-between'}}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
      <Cross
      name='cross' color='black' size={23}
      />
      </TouchableOpacity>
      <Text style={styles.title}>Edit Profile</Text>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
title:{
    fontSize:22,
    color:'black',
    fontWeight:'500'
}

})