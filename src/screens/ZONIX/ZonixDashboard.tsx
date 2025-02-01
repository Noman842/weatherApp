import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const ZonixDashboard = () => {
    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >
                <View style={styles.mainview}>

                    <Text style={styles.title}>
                        Leaderboard
                    </Text>

                    <Text style={styles.tokenname}>ZNX</Text>
                    <Text style={styles.token}>3000</Text>
                    {/* ScrollView */}

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.outerview}>

                            <View style={styles.view}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>1. </Text>
                                    <Text style={styles.name}>Ashraf</Text>
                                </View>
                                <View style={styles.tokenview}>
                                    <Text style={styles.totaltoken}>123456</Text>
                                </View>
                            </View>

                            <View style={styles.view}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>1. </Text>
                                    <Text style={styles.name}>Ashraf</Text>
                                </View>
                                <View style={styles.tokenview}>
                                    <Text style={styles.totaltoken}>123456</Text>
                                </View>
                            </View><View style={styles.view}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>1. </Text>
                                    <Text style={styles.name}>Ashraf</Text>
                                </View>
                                <View style={styles.tokenview}>
                                    <Text style={styles.totaltoken}>123456</Text>
                                </View>
                            </View><View style={styles.view}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>1. </Text>
                                    <Text style={styles.name}>Ashraf</Text>
                                </View>
                                <View style={styles.tokenview}>
                                    <Text style={styles.totaltoken}>123456</Text>
                                </View>
                            </View><View style={styles.view}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>1. </Text>
                                    <Text style={styles.name}>Ashraf</Text>
                                </View>
                                <View style={styles.tokenview}>
                                    <Text style={styles.totaltoken}>123456</Text>
                                </View>
                            </View><View style={styles.view}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>1. </Text>
                                    <Text style={styles.name}>Ashraf</Text>
                                </View>
                                <View style={styles.tokenview}>
                                    <Text style={styles.totaltoken}>123456</Text>
                                </View>
                            </View><View style={styles.view}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>1. </Text>
                                    <Text style={styles.name}>Ashraf</Text>
                                </View>
                                <View style={styles.tokenview}>
                                    <Text style={styles.totaltoken}>123456</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.button}
                            >
                                <Text style={styles.buttontxt}>See all</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>


                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ZonixDashboard

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,

    },
    mainview: {
        margin: 20,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: "Orbitron-Medium",
        color: "#00FFC2", // Neon green color
        textShadowColor: "#007B55", // Darker shadow
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    tokenname: {
        fontSize: 20,
        color: '#fff',
        marginVertical: '3%',
        fontFamily: 'Orbitron-Medium',
    },
    token: {
        fontSize: 24,
        color: '#fff',
        fontFamily: 'Orbitron-Medium'
    },
    view: {
        marginVertical: '3%',
        height: 55,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#1E1F28',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
        shadowColor: "#00FFC2", // Light glow effect
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
    },
    tokenview: {
        height: 30,
        width: 100,
        backgroundColor: '#23D9B1',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#00FFC2", // Light glow effect
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    totaltoken: {
        fontSize: 15,
        color: '#000',
        fontWeight: '500',
        fontFamily:'Orbitron-Medium',
    },
    name: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    outerview: {
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#23D9B1',
        borderRadius: 15,
        marginVertical: 10,

    },
    button: {
        height: 45,
        width: '100%',
        backgroundColor: '#23D9B1',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        marginTop: 10,
        shadowColor: "#00FFC2",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    buttontxt: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Poppins-Medium'
    }
})