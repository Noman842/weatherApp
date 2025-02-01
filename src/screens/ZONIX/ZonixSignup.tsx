import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth'
import ToastManager, { Toast } from 'toastify-react-native'
import FlashMessage, { showMessage } from "react-native-flash-message";
import { CommonActions, useNavigation } from '@react-navigation/native';
import Box from 'react-native-vector-icons/Feather'


const ZonixSignup = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isloading, setIsloading] = useState(false)
    const [username, setUsername] = useState('')

    const Signup = () => {
        if (username == '' && email == '' || password == '') {
            Condition()
        }
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Email Stored')
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'ZonixHome' }],
                }));
            })

            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    already()
                    console.log('That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    Invalid()
                    console.log('That email address is invalid!')
                } else if (error.code === 'auth/weak-password') {
                    Weak()
                } else if (error.code === 'auth/network-request-failed') {
                    failed()
                } else {
                    console.error(error);
                }
                setIsloading(false);
            });
    }

    const Condition = () => {
        showMessage({
            message: 'Input cannot be empty',
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
            message: 'Email is Invalid',
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
    const Weak = () => {
        showMessage({
            message: 'Password is too weak',
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

    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >

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
                    <Text style={styles.title}>Sign up</Text>
                    <TextInput
                        style={styles.emailinput}
                        value={username}
                        onChangeText={setUsername}
                        placeholder='username'
                        placeholderTextColor='lightgray'
                        maxLength={20}
                    />
                    <TextInput
                        style={styles.emailinput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                        placeholderTextColor='lightgray'
                    />
                    <TextInput
                        style={styles.emailinput}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='password'
                        placeholderTextColor='lightgray'
                    />
                    <ToastManager />

                    <TouchableOpacity
                    activeOpacity={0.7}
                        onPress={Signup}
                        style={styles.button}>
                        <Text style={styles.buttontxt}>Create Account</Text>
                    </TouchableOpacity>

                    <FlashMessage position='top' />


                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text>Already have an Account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ZonixLogin' as never)}
                        >
                            <Text style={{ color: '#23D9B1' }}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </LinearGradient>
        </SafeAreaView >
    )
}

export default ZonixSignup

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
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: '#23D9B1',
        alignSelf: 'center',
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
        elevation: 8,
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