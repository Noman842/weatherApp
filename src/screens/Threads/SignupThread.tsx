import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Meta from 'react-native-vector-icons/Entypo'
import Eye from 'react-native-vector-icons/Entypo'
import auth from '@react-native-firebase/auth'
import { Image } from 'react-native'
import Store from '@react-native-firebase/firestore'




const SignupThread = () => {
  const [hide, setHide] = useState<any>(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsloading] = useState(false)
    const [data, setData] = useState('')
  


  const Signup = () => {
    if (username == '' || email == '' || password == '') {
      setIsloading(false)
      Alert.alert('Please Enter required info..')
    } else (
      console.log('Email', email),
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setIsloading(false)
            Alert.alert('Email is already in use')
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          if(error.code === 'auth/weak-password'){
            setIsloading(false)
            Alert.alert('Password is weak')
          }
          console.error(error);

        })
    )
  }
  const DataA = () => {
    const Array = [...data, { username: username }]
    storeToFirebase(Array)
    setData(Array as any)
    console.log('Data====>', data)
  }

  const storeToFirebase = (Array: any) => {
    Store()
      .collection('users')
      .doc('Data')
      .set({
        Data: Array,
      })
      .then(
        () => console.log('Data Stored')
      )
    setUsername('')

  }
  const condition = (plate: any) => {
    const re = /(^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$)/

    return re.test(plate);

  }

  return (
    <View style={styles.body}>
      {isloading ?
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
          <ActivityIndicator color='blue' size='large' /></View> :
        <>
          <TouchableOpacity style={{ flex: 0.06, justifyContent: 'flex-end' }}>
            <Text style={{ color: '#fff' }}>English(US)</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.8, justifyContent: "center" }}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder='Enter Username'
              placeholderTextColor='#A1A1A1'
              style={styles.Input}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder='Enter Email'
              placeholderTextColor='#A1A1A1'
              style={styles.Input}
            />
            <View style={{ flexDirection: 'row', }}>
              <TextInput
                value={password}
                onChange={condition}
                editable={true}
                onChangeText={setPassword}
                placeholder='Password'
                placeholderTextColor='#A1A1A1'
                style={styles.Input}
                secureTextEntry={hide}

              />
              <TouchableOpacity
                style={{ alignSelf: 'center', marginRight: 15, position: "absolute", right: 0 }}
                onPress={() => setHide(!hide)}
              >
                <Eye
                  name='eye' color='#fff' size={19}
                />
              </TouchableOpacity>
            </View>


            <TouchableOpacity
              onPress={() => { DataA();setIsloading(true); Signup() }}
            >
              <View style={styles.button}>

                <Text style={styles.buttontxt}>Signup</Text>
              </View>
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20 }}>

            <Image style={{ height: 30, width: 30 }} source={require('./../../images/Metalogo.png')} />
            <Text style={{ fontSize: 17, marginLeft: 3, alignSelf: 'center', color: '#fff' }}>Meta</Text>
          </View>
        </>
      }
    </View>
  )
}

export default SignupThread

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1A313F',
    alignItems: 'center'
  },
  Input: {
    height: 60,
    backgroundColor: '#1C2A33',
    width: 320,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    marginVertical: 7,
  },
  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#0064E0',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontxt: {
    color: '#fff',
    fontSize: 18,
  }
})