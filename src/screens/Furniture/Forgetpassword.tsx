import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Forgetpassword = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.body}>
      <View style={{ flexDirection: 'row', height: 100, marginTop: 20, marginLeft: 15 }}>
        <View style={styles.Back}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login' as never)}
          >
            <Back
              name='chevron-back-outline' color="black" size={22}
            /></TouchableOpacity>
        </View>
        <Text style={styles.logintxt}>Forgot Password</Text>
      </View>  

      <Text style={{color:'gray',marginHorizontal:15}}>
      Enter the email associated with your account and we’ll send an email with code to reset your password
      </Text>

      <View>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.emailinput}
          placeholder='Text your email'
          placeholderTextColor='gray'
        />
      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Otp' as never)}
      >
      <View style={styles.button}>
        <Text style={styles.buttontxt}>Confirm</Text>
        </View></TouchableOpacity>
    </View>
  )
}

export default Forgetpassword

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
        marginLeft: 55,
      },
      email: {
        marginTop:10,
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
})