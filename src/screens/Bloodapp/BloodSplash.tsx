import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth, { firebase } from '@react-native-firebase/auth'


const BloodSplash = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation<any>()
  // const animated1 = new Animated.Value(0)
  // const animated2 = new Animated.Value(0)
  // const [delay, setDelay] = useState(1000)
  // const [inAnimationA, setinAnimationA] = useState(true)
  // const [buf1, setBuf1] = useState(0)
  // const [buf2, setBuf2] = useState(1)

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



  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(animated1, {
  //       toValue: 300,
  //       duration: 2000,
  //       useNativeDriver: true,
  //       easing: Easing.linear,
  //     }),
  //   ]).start(() => {
  //     setinAnimationA(true)
  //     if (inAnimationA) {
  //       setinAnimationA(false)
  //       setBuf1(buf1 => buf1 + 1)
  //       if (delay > 0) { setDelay(0) }
  //     }
  //   })
  // }, [animated1])



  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.body}>

        <Image
          style={{ height: 250, width: 250 }}
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