import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CalculatorGo = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.body}>
            <Text style={styles.txt}>Crunch numbers,solve problems,and unlock possibilities</Text>

            <TouchableOpacity
            onPress={()=>navigation.navigate('Calculator' as never)}
                style={styles.button}
            >
                <Text style={styles.buttontxt}>Get Started</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default CalculatorGo

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#83DCF6A1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 22
    },
    button: {
        height: 48,
        width: '85%',
        backgroundColor: '#054B738A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#000',
        position: 'absolute',
        bottom: '17%'
    },
    buttontxt: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Poppins-Regular'
    }

})