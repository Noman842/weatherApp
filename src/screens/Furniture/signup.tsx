import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/Ionicons'
import Google from 'react-native-vector-icons/AntDesign'

const signup = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.body}>
      <View style={{ flexDirection: 'row', height: 100, marginTop: 20, marginLeft: 15 }}>
        <View style={styles.Back}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginSignup' as never)}
          >
            <Back
              name='chevron-back-outline' color="black" size={22}
            /></TouchableOpacity>
        </View>
        <Text style={styles.logintxt}>Signup</Text>
      </View>

      <View>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.emailinput}
          placeholder='Text your email'
          placeholderTextColor='gray'
        />
      </View>
      <View>
        <Text style={styles.password}>Password</Text>
        <TextInput
          style={styles.emailinput}
          placeholder='Text your password'
          placeholderTextColor='gray'
          textContentType='password'
        />
      </View>
      <View>
        <Text style={styles.password}>Confirm password</Text>
        <TextInput
          style={styles.emailinput}
          placeholder='Confirm your password'
          placeholderTextColor='gray'
          textContentType='password'
        />
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Home' as never)}
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