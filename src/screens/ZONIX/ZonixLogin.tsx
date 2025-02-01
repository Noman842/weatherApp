import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Box from 'react-native-vector-icons/Feather'
import { CommonActions, useNavigation } from '@react-navigation/native';
import Eye from 'react-native-vector-icons/Entypo'
import auth, { firebase, onAuthStateChanged } from '@react-native-firebase/auth'
import FlashMessage, { showMessage } from "react-native-flash-message";
import { BarIndicator } from "react-native-indicators"


const ZonixLogin = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isloading, setIsloading] = useState(false)

    const Login = () => {
        setIsloading(true)
        if (email == '' || password == '') {
            setIsloading(false)
            Inputs()
        } else (
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    Logined()
                    console.log('User account created & signed in!');
                    // if (user?.emailVerified) {
                    //     navigation.dispatch(CommonActions.reset({
                    //         index: 0,
                    //         routes: [{ name: 'BloodHome' }],
                    //     }));
                    // } else {
                    //     setIsloading(false)
                    //  return Alert.alert('Please Verify your account')
                    // }
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'ZonixHome' }],
                    }))
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        already()
                    }

                    else if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        setIsloading(false)
                        Invalid()

                    }
                    else if (error.code === 'auth/invalid-credential') {
                        setIsloading(false)
                        Incorrect()
                    }
                    else if (error.code === 'auth/user-not-found') {
                        setIsloading(false)
                        Exist()
                    }
                    else if (error.code === 'auth/network-request-failed') {
                        setIsloading(false)
                        failed()
                    }
                    console.error(error);
                })
        )
    }

    const Logined = () => {
        showMessage({
            message: 'Welcome',
            type: 'success',
            position: 'top',
            style: {
                borderRadius: 20,
                height: 60,
                marginHorizontal: 20,
                marginTop: 10,
                backgroundColor: '#23D9B1',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    }

    const Inputs = () => {
        showMessage({
            message: 'Input fields cannot be empty',
            type: 'danger',
            position: 'top',
            style: {
                borderRadius: 20,
                height: 60,
                marginHorizontal: 20,
                marginTop: 10,
                backgroundColor: '#b73537',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    }
    const already = () => {
        showMessage({
            message: 'Email Address is already in use!',
            type: 'danger',
            position: 'top',
            style: {
                borderRadius: 20,
                height: 60,
                marginHorizontal: 20,
                marginTop: 10,
                backgroundColor: '#b73537',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    }

    const Invalid = () => {
        showMessage({
            message: 'Email Address is Invalid',
            type: 'danger',
            position: 'top',
            style: {
                borderRadius: 20,
                height: 60,
                marginHorizontal: 20,
                marginTop: 10,
                backgroundColor: '#b73537',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    }
    const Exist = () => {
        showMessage({
            message: 'Email does not exist!',
            type: 'danger',
            position: 'top',
            style: {
                borderRadius: 20,
                height: 60,
                marginHorizontal: 20,
                marginTop: 10,
                backgroundColor: '#b73537',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    }
    const failed = () => {
        showMessage({
            message: 'Network problem!',
            type: 'danger',
            position: 'top',
            style: {
                borderRadius: 20,
                height: 60,
                marginHorizontal: 20,
                marginTop: 10,
                backgroundColor: '#b73537',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    }

    const Incorrect = () => {
        showMessage({
            message: 'Email and password does not match',
            type: 'danger',
            position: 'top',
            style: {
                borderRadius: 20,
                height: 60,
                marginHorizontal: 20,
                marginTop: 10,
                backgroundColor: '#b73537',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    }

    const Loader = () => {
        {
            isloading ?
                <BarIndicator color="23D9B1" size={40} /> :
                null
        }

    }
    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >
                {isloading ?
                    <BarIndicator color="#23D9B1" size={40} /> :

                    <View style={styles.mainview}>

                        <Box
                            style={{
                                height:90,
                                textShadowColor: 'cyan',
                                textShadowOffset: { width: 0, height: 0 },
                                textShadowRadius: 25, // Increase for stronger glow
                            }}
                            name='box' color='#23D9B1' size={80}
                        />
                        <Text style={{ fontSize: 30, fontWeight: '500', color: '#23D9B1', alignSelf: 'center' }}>Login</Text>
                        <TextInput
                            style={styles.emailinput}
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Email'
                            placeholderTextColor='lightgray'
                            maxLength={40}
                        />
                        <TextInput
                            style={styles.emailinput}
                            value={password}
                            onChangeText={setPassword}
                            placeholder='password'
                            placeholderTextColor='lightgray'
                        />
                        <TouchableOpacity style={{
                            alignSelf: 'flex-end',
                            marginRight: '13%',
                            marginTop: 5,
                        }}>
                            <Text style={styles.forget}>Forget Password?</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => { Login(); setIsloading(true) }}
                            style={styles.button}>
                            <Text style={styles.buttontxt}>Login</Text>
                        </TouchableOpacity>


                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text>Didn't have account?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ZonixSignup' as never)}
                            >
                                <Text style={{ color: '#23D9B1' }}> Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <FlashMessage position='top' />
                    </View>

                }
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ZonixLogin

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,

    },
    mainview: {
        marginBottom: '10%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailinput: {
        height: 50,
        width: '80%',
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#23D9B1',
        padding: 15,
        color: '#fff',
        marginTop: '7%'
    },
    button: {
        height: 50,
        width: '80%',
        backgroundColor: '#23D9B1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: '5%',
        elevation: 7,
    },
    buttontxt: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#fff',
    },
    forget: {
        color: '#23D9B1',
        fontSize: 14,
        fontStyle: 'italic'
    }
})