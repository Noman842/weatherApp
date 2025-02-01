import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const ZonixMining = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ZonixMining

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainview: {
        marginBottom: '10%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})