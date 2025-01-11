import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { confirmPasswordReset, sendPasswordResetEmail } from '@react-native-firebase/auth'
import auth from '@react-native-firebase/auth'


const BloodForget = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState<any>('')

    const Forget = () => {
        return (
            auth()
                .sendPasswordResetEmail(email)
               
        )
    }

    return (
        <View style={styles.body}>
            <View style={{ flexDirection: 'row', margin: 16 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Back
                        name='arrowleft' color='black' size={23}
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
                        onPress={() => { Forget(); setEmail(''); Alert.alert('Check Your Mail box')
                        }}
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

export default BloodForget

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',

    },
    title: {
        color: 'black',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500'
    },
    Input: {
        height: 60,
        backgroundColor: '#fff',
        width: 320,
        borderBottomWidth: 1,
        borderColor: 'gray',
        padding: 10,
        color: 'gray',
        marginVertical: 7,
    },
    button: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#D80032',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontxt: {
        color: '#fff',
        fontSize: 18,
    }
})