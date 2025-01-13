import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { confirmPasswordReset, sendPasswordResetEmail } from '@react-native-firebase/auth'
import auth from '@react-native-firebase/auth'


const BloodForget = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState<any>('')
    const [modelvisible, setModelVisible] = useState(false)

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

                    <Modal
                        visible={modelvisible}
                        animationType='slide'
                        transparent={true}
                    >
                        <View style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View style={{
                                height: '20%',
                                width: '90%',
                                backgroundColor: '#E8315B',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: '#E8315B',
                                borderRadius: 20,
                            }}>

                                <Text style={{ color: '#fff', fontSize: 19, fontWeight: '500' }}>
                                    Check Your mail box
                                </Text>
                                <TouchableOpacity
                                    onPress={() => setModelVisible(false)}
                                >
                                    <Text style={{
                                        color: '#fff',
                                        marginTop: 15,
                                        fontSize: 16,
                                        fontWeight: '500',
                                    }}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity
                        disabled={email == ''}
                        onPress={() => {
                            Forget(); setEmail(''); setModelVisible(true)
                        }}
                    >
                        <View style={[styles.button, { backgroundColor: email == 0 ? 'gray' : '#D80032' }]}>

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
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontxt: {
        color: '#fff',
        fontSize: 18,
    }
})