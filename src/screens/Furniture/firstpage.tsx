import { StyleSheet, Text, View ,Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const firstpage = () => {
  const navigation=useNavigation()

  useEffect(() => {
  setTimeout(() => {
    return  navigation.navigate('Intro' as never)
    }, 2000); 
   
  }, []);

  return (
    <View style={styles.body}>
        <TouchableOpacity 
        style={{flexDirection:'row'}}
        >
      <Image source={require('./../../images/Group.png')} />
     <View style={{justifyContent:'flex-end',marginBottom:10}}>
        <Text style={{color:'black',fontSize:27,fontWeight:'600',}}>Furniture</Text>
     </View> 
      </TouchableOpacity>
    </View>
  )
}

export default firstpage

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})