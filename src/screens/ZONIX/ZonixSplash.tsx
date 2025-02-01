import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import auth, { onAuthStateChanged } from '@react-native-firebase/auth'
import ZonixLogin from './ZonixLogin'

const ZonixSplash = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


    function onAuthStateChanged(user: any) {
        setUser(user)
        if (initializing) setInitializing(false)
    }
    const naviagtion = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            if (!initializing) {
                if (!user) {
                    naviagtion.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: "ZonixLogin" }]
                    }))
                } else {
                    naviagtion.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'ZonixHome' }]
                    }))
                }
            }
        }, 2000);
    }, [initializing, user])

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber
    }, [])


    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >
                <Text style={styles.name}>ZONIX</Text>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ZonixSplash

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 60,
        fontFamily: 'Orbitron-Bold',
        color: '#23D9B1'
        
    }
})