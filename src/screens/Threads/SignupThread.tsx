import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Meta from 'react-native-vector-icons/Entypo'
import Eye from 'react-native-vector-icons/Entypo'
import auth from '@react-native-firebase/auth'
import { Image } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux'
import { addEmail } from '../../store/Slice/EmailandData'
import { adduserdata } from '../../store/Slice/EmailandData'






const SignupThread = () => {
  const [hide, setHide] = useState<any>(true)
  const [name, setName] = useState<any>('')
  const [email, setEmail] = useState<any>('')
  const [password, setPassword] = useState('')
  const [isloading, setIsloading] = useState(false)
  const bio: any = ''
  const Dispatch = useDispatch()





  const Signup = () => {
    setIsloading(true)
    if (name == '' || email == '' || password == '') {
      setIsloading(false)
      Alert.alert('Please Enter required info..')
    } else (
      console.log('Email', email, name),
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          Dispatch(addEmail(email));
          console.log('Redux Email', Dispatch(addEmail(email)))

          StoreEmail();
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setIsloading(false)
            Alert.alert('Email is already in use')
            console.log('That email address is already in use!');
            setIsloading(false)

          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          if (error.code === 'auth/weak-password') {
            Alert.alert('Password is weak')
            setIsloading(false)

          }
          if (error.code === 'auth/network-request-failed') {
            Alert.alert('Please check your network connection')
            setIsloading(false)

          }
          console.error(error);
          console.error(error);

        })
    )
  }
  const StoreEmail = () => {
    firestore()
      .collection('users')
      .doc(email)
      .set({
        email: email,
        name: name,
        bio: bio,
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log('User added!');
      });
  }



  return (
    <View style={styles.body}>
      {isloading ?
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
          <ActivityIndicator color='#fff' size='large' /></View> :
        <>
          <TouchableOpacity style={{ flex: 0.06, justifyContent: 'flex-end' }}>
            <Text style={{ color: '#fff' }}>English(US)</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.8, justifyContent: "center" }}>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder='Enter Name'
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
                  name={hide === false ? 'eye' : 'eye-with-line'} color='#fff' size={19}
                />
              </TouchableOpacity>
            </View>


            <TouchableOpacity
              onPress={() => {
                Signup()

              }}
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