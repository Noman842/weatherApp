import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { confirmPasswordReset, sendPasswordResetEmail } from '@react-native-firebase/auth'
import auth from '@react-native-firebase/auth'


const ForgetPasswordThread = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState<any>('')
    const [newpassword, setNewpassword] = useState('')

    const Forget = () => {
        auth()
            .sendPasswordResetEmail(email)
    }

    return (
        <View style={styles.body}>
            <View style={{ flexDirection: 'row', margin: 16 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Back
                        name='arrowleft' color='#fff' size={23}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Forget Password</Text>
            </View>
            <View style={{
                margin: 16, flex: 0.7, alignItems: 'center',
                justifyContent: 'center'
            }}>

                <View style={{ alignSelf: 'center' }}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter Email'
                        placeholderTextColor='#A1A1A1'
                        style={styles.Input}
                    />

                    <TouchableOpacity
                        onPress={() => Forget}
                    >
                        <View style={styles.button}>

                            <Text style={styles.buttontxt}>Done</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgetPasswordThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#1A313F',

    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500'
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