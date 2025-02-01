import { StyleSheet, Text, View, TouchableOpacity, Vibration, SafeAreaView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const ZonixHome = () => {

    const Vibe = () => {
        Vibration.vibrate(60);
    }
    return (
        <SafeAreaView style={styles.body}>
           <LinearGradient
                          style={styles.body1}
                          colors={['#121212', '#1F1F1F']}
                          start={{ x: 1, y: 1, }}
                          end={{ x: 0, y: 0 }}
                      >
                      </LinearGradient>
        </SafeAreaView>
    )
}

export default ZonixHome

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,

    },
    mainview: {
        marginBottom: '10%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})