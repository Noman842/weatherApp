import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/Ionicons'
import Google from 'react-native-vector-icons/AntDesign'
import auth from '@react-native-firebase/auth'
import { ActivityIndicator } from 'react-native'
import Eye from 'react-native-vector-icons/Entypo'

const signup = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsloading] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hide, setHide] = useState<any>(true)

  const signin = () => {
    if (email == '' || password == '' || confirmPassword == '') {
      setIsloading(false)
      Alert.alert('Please Enter the require info...')
    }
    if (password !== confirmPassword) {
      setIsloading(false)
      Alert.alert('Password does not match')
    }
    else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          setIsloading(false)
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email is already in use')
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        })
    }
  }


  return (
    <View style={styles.body}>
      {isloading ?
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
          <ActivityIndicator color='blue' size='large' /></View> :

        <>
          <View style={{ flexDirection: 'row', height: 100, marginTop: 20, marginLeft: 15 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginSignup' as never)}
            >
              <View style={styles.Back}>
                <Back
                  name='chevron-back-outline' color="black" size={22}
                />
              </View>
            </TouchableOpacity>

            <Text style={styles.logintxt}>Signup</Text>
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
                style={{ color: 'black' }}
                value={password}
                onChangeText={setPassword}
                placeholder='Text your password'
                placeholderTextColor='gray'
                textContentType='password'
                secureTextEntry={hide}
              />
              <TouchableOpacity
                style={{ alignSelf: 'center', marginRight: 15, }}
                onPress={() => setHide(!hide)}
              >
                <Eye
                  name='eye' color='black' size={19}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.password}>Confirm Password</Text>
            <TextInput
              style={styles.emailinput}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder='Confirm your password'
              placeholderTextColor='gray'
              textContentType='password'
              secureTextEntry={hide}
            />
          </View>
          <TouchableOpacity
            onPress={() => { setIsloading(true); signin() }}
          >
            <View style={styles.button}>
              <Text style={styles.buttontxt}>Signup</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: 'gray', textAlign: 'center', marginVertical: 17 }}>Or</Text>
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

        </>
      }
    </View>
  )
}

export default signup

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
    marginLeft: 90,
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
    justifyContent: 'space-between',

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
})