import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Cal from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';


const Calulatorsplash = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('CalculatorGo' as never)
        }, 2000);
    }, [])


    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#01C0FF80', '#33907680']}
                start={{ x: 1, y: 0, }}
                end={{ x: 0, y: 1 }}
            >
                <Cal
                    name='calculator-variant' size={35} color='#000'
                />
                <Text style={styles.Text}>CALCULATOR</Text>

            </LinearGradient>
        </SafeAreaView>
    )
}

export default Calulatorsplash

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        color: '#000',
        fontSize: 35,
        fontWeight: '500',
    }
})