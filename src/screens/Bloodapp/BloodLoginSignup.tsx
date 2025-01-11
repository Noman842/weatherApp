import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const BloodLoginSignup = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.body}>
            <Image
                source={require('./../../images/Blooddrop.png')}
            />

            <TouchableOpacity
                onPress={() => navigation.navigate('BloodLogin' as never)}
                style={styles.Loginbutton}
            >
                <Text style={styles.Loginbuttontxt}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate('BloodSignup'as never)}
                style={styles.Signupbutton}
            >
                <Text style={styles.Signupbuttontxt}>Create Account</Text>

            </TouchableOpacity>

            <Image
                style={styles.waves}
                source={require('./../../images/waves.png')}
            />
        </SafeAreaView>
    )
}

export default BloodLoginSignup

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Loginbutton: {
        borderWidth: 1.5,
        borderColor: '#DC1A47',
        width: '85%',
        height: 60,
        borderRadius: 30,
        marginTop: '4%',
        justifyContent: 'center'
    },
    Loginbuttontxt: {
        color: '#E1204D',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    Signupbutton: {
        width: '85%',
        height: 60,
        borderRadius: 30,
        marginTop: '4%',
        backgroundColor: '#D80032',
        justifyContent: 'center',

    },
    Signupbuttontxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    waves: {
        position: 'absolute',
        bottom: 0,
        height: 150,
        width: '100%'
    }

})