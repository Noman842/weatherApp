import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Eye from 'react-native-vector-icons/Entypo'
import auth from '@react-native-firebase/auth'
import { Image } from 'react-native'



const LoginThread = () => {
  const [hide, setHide] = useState<any>(true)
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsloading] = useState(false)


  const Login = () => {
    if (email == '' && password == '') {
      setIsloading(false)
      Alert.alert('Please Enter required info..')
    } else (
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          if(error.code === 'auth/invalid-credential'){
            setIsloading(false)
            Alert.alert('Email and password does not match')
          }
          console.error(error);

        })
    )
  }
  return (
    <View style={styles.body}>
      {isloading ?
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
          <ActivityIndicator color='blue' size='large' /></View> :
        <>
          <TouchableOpacity style={{ flex: 0.06, justifyContent: 'flex-end', alignItems: "center" }}>
            <Text style={{ color: '#fff' }}>English(US)</Text>

            <View style={{ flex: 0.1, justifyContent: "center" }}>
              <Image
                style={{ height: 80, width: 80, top: 110 }}
                source={require('./../../images/Instalogo.png')}
              />
            </View>

          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: "center" }}>
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
                  name='eye' color='#fff' size={19}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ForgetPasswordThread' as never)}
            >
              <Text style={{ color: 'gray', fontSize: 13, fontStyle: 'italic' }}>Forget Password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setIsloading(true); Login() }}
            >
              <View style={styles.button}>

                <Text style={styles.buttontxt}>Login</Text>
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignSelf: "center", margin: 10 }}>
              <Text>Don't have account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignupThread' as never)}
              >
                <Text style={{ color: "#0064E0", fontWeight: "500", fontSize: 15 }}> Register</Text>
              </TouchableOpacity>
            </View>
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

export default LoginThread

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