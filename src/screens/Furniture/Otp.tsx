import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Otp = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{ flexDirection: 'row', height: 100, marginTop: 20, marginLeft: 15 }}>
                <View style={styles.Back}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forgetpassword' as never)}
                    >
                        <Back
                            name='chevron-back-outline' color="black" size={22}
                        /></TouchableOpacity>
                </View>
                <Text style={styles.logintxt}>Verify OTP</Text>
            </View>

            <Text style={{ color: 'gray', marginHorizontal: 15 }}>
                Enter your OTP which has been sent to your email and completely verify your account.
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 30, }}>
                <Text style={{ color: 'black', fontSize: 22, marginLeft: 30 }}>9</Text>
                <Text style={{ color: 'black', fontSize: 22, marginLeft: 45 }}>1</Text>
                <Text style={{ color: 'black', fontSize: 22, marginLeft: 40 }}>1</Text>
            </View>

            <View style={styles.viewmain}>
                <View style={styles.views}></View>
                <View style={styles.views}></View>
                <View style={styles.views}></View>
                <View style={styles.views}></View>
                <View style={styles.views}></View>
                <View style={styles.views}></View>
            </View>
            <Text style={{ color: 'gray', textAlign: 'center', marginTop: 20 }}>A code has been sent to your phone</Text>
            <Text style={{ color: '#00b0db', textAlign: 'center', fontSize: 16, marginTop: 7 }}>Resend in 00:57</Text>

            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttontxt}>Confirm</Text>
                </View></TouchableOpacity>
        </View>
    )
}

export default Otp

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
        marginLeft: 60,
    },
    views: {
        width: 40,
        borderWidth: 1,
        borderBottomColor: 'gray',

    },
    viewmain: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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