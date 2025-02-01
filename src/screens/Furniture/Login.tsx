import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import LoginFurniture from '../../components/LoginFurniture'
import Google from 'react-native-vector-icons/AntDesign'
import auth, { signInWithEmailAndPassword } from '@react-native-firebase/auth'
import { ActivityIndicator } from 'react-native'
import Eye from 'react-native-vector-icons/Entypo'



const Login = () => {
  const navigaton = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsloading] = useState(false)
  const [hider, setHider] = useState(true)


  const login = () => {

    if (email == '' && password == '') {
      setIsloading(false)
      Alert.alert('Please Enter required info..')
    }else(
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
        console.error(error);
      
      })
    )
  };


  return (
    <View style={styles.body}>
      <ScrollView>
        {isloading ?
          <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
            <ActivityIndicator color='blue' size='large' /></View> :
          <>

            <View style={{ flexDirection: 'row', marginTop: 20, flex: 0.5 }}>
              <View style={{ flexDirection: 'row', height: 100, marginLeft: 15 }}>
                <TouchableOpacity
                  onPress={() => navigaton.navigate('LoginSignup' as never)}
                >
                  <View style={styles.Back}>

                    <Back
                      name='chevron-back-outline' color="black" size={22}
                    />
                  </View>
                </TouchableOpacity>

              </View>
              <Text style={styles.logintxt}>Login</Text>
            </View>

            <View>
              <Text style={styles.email}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.emailinput}
                placeholder='Text your email'
                placeholderTextColor='gray'
              />
            </View>

            <View>

              <Text style={styles.password}>Password</Text>
              <View style={styles.emailinput}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={{ color: 'black' }}
                  placeholder='Text your password'
                  placeholderTextColor='gray'
                  textContentType='password'
                  secureTextEntry={hider}
                />
                <TouchableOpacity
                  style={{ alignSelf: 'center', marginRight: 15 }}
                  onPress={() => setHider(!hider)}
                >
                  <Eye
                    name='eye' color='black' size={19}
                  />
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                  <Text style={{ color: 'gray', fontSize: 12, marginLeft: 15, marginTop: 7 }}>Remember me</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigaton.navigate('Forgetpassword' as never)} ><Text style={{ color: 'gray', fontSize: 12, marginRight: 15, marginTop: 7 }}>Forgot password?</Text>
                </TouchableOpacity></View>
            </View>

            <TouchableOpacity
              onPress={() => {setIsloading(true); login() }}
              style={styles.button}>
              <View>
                <Text style={styles.buttontxt}>Login</Text>
              </View></TouchableOpacity>



            <View style={{ flexDirection: 'row', marginVertical: 22, alignSelf: 'center', }}>
              <View style={styles.line}></View>
              <Text style={{ color: 'gray', textAlign: 'center', marginHorizontal: 9 }}>Or</Text>
              <View style={styles.line}></View>
            </View>

            <TouchableOpacity style={styles.button2}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Google
                  name='google' color='green' size={19}
                />
                <Text style={styles.buttontxt2}>  Continue with Google</Text>
              </View></TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Google
                  name='facebook-square' color='blue' size={19}
                />
                <Text style={styles.buttontxt2}>  Continue with Facebook</Text>
              </View></TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
              <Text style={{ color: 'gray' }}>Don't have account? </Text>
              <TouchableOpacity
                onPress={() => navigaton.navigate('Signup' as never)}
              >
                <Text style={{ color: 'blue', }}>Register</Text>
              </TouchableOpacity></View>

          </>

        }
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  Back: {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: 'lightgray',
    justifyContent: "center",
    alignItems: 'center'
  },
  logintxt: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
  },
  email: {
    color: 'black',
    marginLeft: 17,
    fontFamily: 'Poppins-Regular',
  },
  emailinput: {
    borderWidth: 1.5,
    borderColor: 'lightgray',
    borderRadius: 15,
    backgroundColor: 'transparent',
    color: 'black',
    marginHorizontal: 10,
    marginTop: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  password: {
    color: 'black',
    marginLeft: 17,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    height: 50,
    backgroundColor: 'black',
    marginHorizontal: 18,
    borderRadius: 10,
    justifyContent: 'center'
  },
  buttontxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 19,
  },
  button2: {
    marginTop: 15,
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginHorizontal: 18,
    borderRadius: 10,
    justifyContent: 'center'
  },
  buttontxt2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500'
  },
  line: {
    borderTopWidth: 1,
    borderColor: 'lightgray',
    width: 150,
    alignSelf: 'center',

  }
})