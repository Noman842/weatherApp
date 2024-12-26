import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'

const firstpage = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation()


  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    setTimeout(() => {
      if (!initializing) {
        if (!user) { 
            navigation.navigate('Login' as never)

        } else (navigation.navigate('Home' as never))
      }

    }, 2000);
  }, [initializing,user]),

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);





  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
      >
        <Image source={require('./../../images/Group.png')} />
        <View style={{ justifyContent: 'flex-end', marginBottom: 10 }}>
          <Text style={{ color: 'black', fontSize: 27, fontWeight: '600', }}>Furniture</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default firstpage

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})