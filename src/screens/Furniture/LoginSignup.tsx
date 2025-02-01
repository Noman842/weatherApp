import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Google from 'react-native-vector-icons/AntDesign'


const LoginSignup = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={styles.txtimg}>
                <Image source={require('./../../images/Group.png')} />
                <Text style={styles.txt}>Furniture</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login' as never)}
                style={styles.button}>
                <View>
                    <Text style={styles.buttontxt}>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Signup' as never)}
                style={styles.button2}>
                <View>
                    <Text style={styles.buttontxt2}>Signup</Text>
                </View></TouchableOpacity>
{/* 
            <Text style={{ color: 'gray', textAlign: 'center', marginVertical: 17 }}>Or</Text>
            <TouchableOpacity style={styles.button2}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Google
                        name='google' color='green' size={19}
                    />
                    <Text style={styles.buttontxt2}>  Continue with Google</Text>
                </View></TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Google
                        name='facebook-square' color='blue' size={19}
                    />
                    <Text style={styles.buttontxt2}>  Continue with Facebook</Text>
                </View></TouchableOpacity> */}

        </View>
    )
}

export default LoginSignup

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    txtimg: {
        flex: 0.43,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: 'black',
        fontSize: 28,
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 35,
    },
    button: {
        flex: 0.07,
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
    button2: {
        marginTop: 15,
        flex: 0.07,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 18,
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttontxt2: {
        color: 'black',
        textAlign: 'center',
        fontSize: 19,
    },
})