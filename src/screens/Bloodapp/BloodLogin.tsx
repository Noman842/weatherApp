import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Google from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import Eye from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import { addUserEmail } from '../../store/Slice/BloodSlice'


const BloodLogin = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState<any>('')
    const [password, setPassword] = useState('')
    const [isloading, setIsloading] = useState(false)
    const [hide, setHide] = useState<any>(true)
    const Dispatch = useDispatch()

    const Login = () => {
        if (email == '' && password == '') {
            setIsloading(false)
            Alert.alert('Please Enter required info..')
        } else (
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    Dispatch(addUserEmail(email))
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                    if (error.code === 'auth/invalid-credential') {
                        setIsloading(false)
                        Alert.alert('Email and password does not match or Email does not exist')
                    }
                    console.error(error);

                })
        )
    }

    return (
        <SafeAreaView style={styles.body}>
            {isloading ?
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
                    <ActivityIndicator color='#D80032' size='large' /></View> :

                <>
                    <Text style={styles.tilttxt}>Welcome Back!</Text>

                    <TextInput
                        style={styles.TextInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='E-mail'
                        placeholderTextColor='#877E7F'
                        textContentType='emailAddress'
                    />

                    <View>
                        <TextInput
                            style={styles.TextInput2}
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Password'
                            placeholderTextColor='#877E7F'
                            textContentType='password'
                            secureTextEntry={hide}

                        />
                        <TouchableOpacity
                            style={{ alignSelf: 'center', marginRight: 15, position: "absolute", right: 10, top: 20, }}
                            onPress={() => setHide(!hide)}
                        >
                            <Eye
                                name={hide === false ? 'eye' : 'eye-with-line'} color='gray' size={19}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                    onPress={()=>navigation.navigate('BloodForget' as never)}
                    >
                        <Text style={styles.forget}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setIsloading(true); Login() }}
                        style={styles.Loginbutton}
                    >
                        <Text style={styles.Loginbuttontxt}>Login</Text>

                    </TouchableOpacity>
                    <View style={styles.lineview}>
                        <View style={styles.line1}></View>
                        <Text style={styles.or}>OR</Text>
                        <View style={styles.line1}></View>
                    </View>

                    <TouchableOpacity
                        style={styles.Google}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Google
                                name='google' color='#D80032' size={26}
                            />
                            <Text style={styles.Googletxt}>Sign in with Google</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.asksignupview}>
                        <Text style={styles.asksignuptxt1}>Don't have account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('BloodSignup' as never

                            )}
                        >
                            <Text style={styles.asksignuptxt2}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </SafeAreaView>
    )
}

export default BloodLogin

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tilttxt: {
        color: '#490008',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '15%',
        marginLeft: "5%",
    },
    TextInput: {
        borderBottomWidth: 1,
        borderColor: '#877E7F',
        marginHorizontal: 15,
        marginVertical: '6%',
        color: '#877E7F',
    },
    TextInput2: {
        borderBottomWidth: 1,
        borderColor: '#877E7F',
        marginHorizontal: 15,
        color: '#877E7F',
    },
    forget: {
        alignSelf: 'flex-end',
        color: '#DC1A47',
        fontWeight: "500",
        marginRight: 15,
        marginVertical: '5%',
    },
    Loginbutton: {
        width: '90%',
        height: 60,
        borderRadius: 30,
        marginTop: '4%',
        backgroundColor: '#D80032',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    Loginbuttontxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    lineview: {
        marginVertical: '7%',
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    line1: {
        borderBottomWidth: .5,
        borderColor: '#877E7F',
        width: "45%",
        alignSelf: "center",
    },
    or: {
        color: 'gray',
    },
    Google: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        marginVertical: '7%',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    Googletxt: {
        fontSize: 16,
        color: 'gray',
        marginLeft: 10,
        fontWeight: '500',
    },
    asksignupview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    asksignuptxt1: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '500',
    },
    asksignuptxt2: {
        color: '#D80032',
        fontSize: 14,
        fontWeight: '500',
    }
})