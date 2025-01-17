import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'


const BloodSplash = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation<any>()


  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    setTimeout(() => {
      if (!initializing) {
        if (!user) {
          navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'BloodLogin' }]
          }))

        } else (navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'BloodHome' }]
        })))
      }

    }, 2000);
  }, [initializing, user]),

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.body}>
        <Image
          source={require('./../../images/Blooddrop.png')}
        />
        <Text style={styles.text}>Blood</Text>
        <Text style={styles.text}>Bestow</Text>
      </View>

    </SafeAreaView>
  )
}

export default BloodSplash

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#490008',
    fontSize: 35,
    fontWeight: '600',

  }
})