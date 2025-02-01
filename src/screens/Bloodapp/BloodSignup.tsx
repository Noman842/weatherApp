import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Google from 'react-native-vector-icons/AntDesign'
import { CommonActions, useNavigation } from '@react-navigation/native'
import auth, { checkActionCode } from '@react-native-firebase/auth'
import Eye from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import { addUserEmail } from '../../store/Slice/BloodSlice'
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import CheckBox from '@react-native-community/checkbox'
import Toast from 'react-native-toast-message'
<<<<<<< HEAD
import { GoogleSignin } from '@react-native-google-signin/google-signin';




=======
import { Button } from 'react-native'
>>>>>>> master

const BloodSignup = () => {
    const navigation = useNavigation()
    const [hide, setHide] = useState<any>(true)
    const [email, setEmail] = useState<any>('')
    const [password, setPassword] = useState<any>('')
    const [isloading, setIsloading] = useState(false)
    const [name, setName] = useState<any>('')
    const [city, setCity] = useState<any>()
    const Dispatch = useDispatch()
    const [checked, setChecked] = React.useState<any>(false);




    const Signup = async () => {
        setIsloading(true)
        if (name === '' || email === '' || password === '') {
            setIsloading(false);
            Alert.alert('Please fill in all required fields (Name, Email, Password).');
        } if (!city || city.trim() === '') {
            setIsloading(false);
            Alert.alert('City cannot be empty.');
            return;
        }
        else {
            console.log('Email', email);
            // const { user } = await 
            auth()
                .createUserWithEmailAndPassword(email, password)
                // await user.sendEmailVerification()
                .then(() => {
                    Dispatch(addUserEmail(email));
                    console.log('User Data email ---', Dispatch(addUserEmail(email)));
                    console.log('User account created & signed in!');
                    StoreEmail();
                    // const user = firebase.auth().currentUser;
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'BloodHome' }],
                    }));
                    //   if(user?.emailVerified){
                    //     navigation.dispatch(CommonActions.reset({
                    //         index: 0,
                    //         routes: [{ name: 'BloodHome' }],
                    //     }));
                    //   }else{
                    //     navigation.dispatch(CommonActions.reset({
                    //         index: 0,
                    //         routes: [{ name: 'BloodLogin' }],
                    //     }));
                    //   }
<<<<<<< HEAD
=======

>>>>>>> master
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        setIsloading(false)
                        showToast()
                        console.log('That email address is already in use!');
                    } else if (error.code === 'auth/invalid-email') {
                        ToastInvalid()
                        console.log('That email address is invalid!')
                    } else if (error.code === 'auth/weak-password') {
                        Toastweak()
                    } else if (error.code === 'auth/network-request-failed') {
                        Toastnetcheck()
                    } else {
                        console.error(error);
                    }
                    setIsloading(false);
                });
        }
    };



    // const Snack = () => {
    //     Snackbar.show({

    //         text: 'Email Already in use',
    //         textColor: '#fff',
    //         backgroundColor: '#E8315B',
    //         duration: Snackbar.LENGTH_SHORT,
    //         marginBottom:10,
    //         // action: {

    //         //     text: 'UNDO',
    //         //     textColor: 'green',
    //         //     onPress: () => { /* Do something. */ },
    //         // },
    //     });
    // }
    const StoreEmail = () => {
        firestore()
            .collection('BloodUsers')
            .doc(email)
            .set({
                email: email,
                Name: name,
                city: city,
                password: password,
                createdAt: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log('User added!');
            });
    }


    // JUST FOR ANDROID
    const showToast = () => {
        ToastAndroid.show('Email is Already in use', ToastAndroid.SHORT,);
    };
    const ToastInvalid = () => {
        ToastAndroid.show('Invalid Email', ToastAndroid.SHORT,);
    }; const Toastweak = () => {
        ToastAndroid.show('Password is too weak', ToastAndroid.SHORT,);
    }; const Toastnetcheck = () => {
        ToastAndroid.show('Email is Already in use', ToastAndroid.SHORT,);
    };


<<<<<<< HEAD
    const social = () => {
        GoogleSignin.configure({
            webClientId: '689345118569-a7n36hlg0kog04uv0dsdohbt4pab8jt2',
        })
    }
=======

>>>>>>> master
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
                            style={{ alignSelf: 'center', marginRight: 15, position: "absolute", right: 10, top: 40, }}
                            onPress={() => setHide(!hide)}
                        >
                            <Eye
                                name={hide === false ? 'eye' : 'eye-with-line'} color='gray' size={19}
                            />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.TextInput2}
                            value={city}
                            onChangeText={setCity}
                            placeholder='City'
                            placeholderTextColor='#877E7F'
                            textContentType='password'

                        />
                    </View>



                    <View style={{ flexDirection: 'row', marginVertical: '4%', marginLeft: '5%' }}>
                        <CheckBox
                            value={checked}
                            onValueChange={setChecked}
<<<<<<< HEAD
                            tintColors={{ true: '#D80032', false: 'gray' }}
=======
                            tintColors={{ true: '#D80032', false: 'gray', }}
>>>>>>> master
                        />
                        <View style={{
                            alignSelf: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 15,
                                fontWeight: '500',
                                alignSelf: 'center'
                            }}>Agree with</Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('BloodTerms' as never)}
                            ><Text
                                style={{
                                    color: '#D80032',
                                    fontSize: 15,
                                    fontWeight: '500',
                                }}
                            > Terms & Conditions</Text></TouchableOpacity>
                        </View>

                    </View>



                    <TouchableOpacity
                        disabled={name === 0 || email === 0 || password === 0 || checked == 0}
                        onPress={() => Signup()}
<<<<<<< HEAD
                        style={[styles.Loginbutton, {
                            backgroundColor: name == '' || email == '' || password == '' || checked == '' ? 'gray' : '#D80032'
=======
                        style={[styles.Loginbutton, { backgroundColor: name=='' ||email =='' || password =='' || checked =='' ?'gray': '#D80032'
>>>>>>> master
                        }]}
                    >
                        <Text style={styles.Loginbuttontxt}>Create Account</Text>
                    </TouchableOpacity>

<<<<<<< HEAD
                    {/* <View style={styles.lineview}>
=======
                    <View style={styles.lineview}>
>>>>>>> master
                        <View style={styles.line1}></View>
                        <Text style={styles.or}>OR</Text>
                        <View style={styles.line1}></View>
                    </View>

<<<<<<< HEAD
                    <TouchableOpacity
                    onPress={social}
=======
                    {/* <TouchableOpacity
>>>>>>> master
                        style={styles.Google}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Google
                                name='google' color='#D80032' size={26}
                            />
                            <Text style={styles.Googletxt}>Sign in with Google</Text>
                        </View>
                    </TouchableOpacity> */}
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