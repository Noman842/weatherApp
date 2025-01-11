import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Google from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import auth, { checkActionCode } from '@react-native-firebase/auth'
import Eye from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import { addUserEmail } from '../../store/Slice/BloodSlice'
import firestore from '@react-native-firebase/firestore';


const BloodSignup = () => {
    const navigation = useNavigation()
    const [hide, setHide] = useState<any>(true)
    const [email, setEmail] = useState<any>('')
    const [password, setPassword] = useState('')
    const [isloading, setIsloading] = useState(false)
    const [name, setName] = useState<any>('')

    const Dispatch = useDispatch()

    const Signup = () => {
        setIsloading(true)
        if (name == '' || email == '' || password == '') {
            setIsloading(false)
            Alert.alert('Please Enter required info..')
        } else (
            console.log('Email', email),
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    Dispatch(addUserEmail(email));
                    console.log('User Data email ---', Dispatch(addUserEmail(email)))
                    console.log('User account created & signed in!');
                    StoreEmail();
                    confirm()

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

    const confirm = () => {
        auth()
        checkActionCode(email, email)

    }

    const StoreEmail = () => {
        firestore()
            .collection('BloodUsers')
            .doc(email)
            .set({
                email: email,
                Name: name,
                createdAt: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log('User added!');
            });
    }

    return (
        <SafeAreaView style={styles.body}>
            {isloading ?
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
                    <ActivityIndicator color='#D80032' size='large' /></View> :
                <>
                    <Text style={styles.tilttxt}>Create An Account</Text>

                    <TextInput
                        style={styles.TextInput}
                        placeholder='Name'
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor='#877E7F'
                        textContentType='emailAddress'
                    />

                    <TextInput
                        style={styles.TextInput2}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                        placeholderTextColor='#877E7F'
                        textContentType='password'

                    />

                    <View>
                        <TextInput
                            style={styles.TextInput}
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Password'
                            placeholderTextColor='#877E7F'
                            textContentType='password'
                            secureTextEntry={hide}
                        />
                        <TouchableOpacity
                            style={{ alignSelf: 'center', marginRight: 15, position: "absolute", right: 10, top: 30, }}
                            onPress={() => setHide(!hide)}
                        >
                            <Eye
                                name={hide === false ? 'eye' : 'eye-with-line'} color='gray' size={19}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => Signup()}
                        style={styles.Loginbutton}
                    >
                        <Text style={styles.Loginbuttontxt}>Create Account</Text>
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
                </>
            }
        </SafeAreaView>
    )
}

export default BloodSignup

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

})