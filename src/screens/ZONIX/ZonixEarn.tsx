import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import X from 'react-native-vector-icons/FontAwesome6'
import Telegram from 'react-native-vector-icons/FontAwesome'


const ZonixEarn = () => {
    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >
                <Text style={styles.title}>Quests</Text>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.mainqueststltle}>
                        <Text style={styles.mainquesttitletxt}>Main Quests</Text>
                    </View>

                    <View style={styles.mainquests}>
                        <View style={{ flexDirection: 'row' }}>
                            <X
                                style={{ alignSelf: 'center', }}
                                name='x-twitter' color='#fff' size={26}
                            />
                            <View>
                                <Text style={styles.mainquesttxt}>Follow zonix X account</Text>
                                <Text style={styles.earntoken}>250.0 $ZNX</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.gobutton}
                        >
                            <Text style={styles.gobuttontxt}>Go</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainquests}>
                        <View style={{ flexDirection: 'row' }}>
                            <Telegram
                                style={{ alignSelf: 'center', }}
                                name='paper-plane-o' color='#fff' size={26}
                            />
                            <View>
                                <Text style={styles.mainquesttxt2}>Follow zonix Telegram community</Text>
                                <Text style={styles.earntoken}>270.0 $ZNX</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.gobutton}
                        >
                            <Text style={styles.gobuttontxt}>Go</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainqueststltle1}>
                        <Text style={styles.mainquesttitletxt}>Social Quests</Text>
                    </View>

                    <View style={styles.mainquests}>
                        <View style={{ flexDirection: 'row' }}>
                            <X
                                style={{ alignSelf: 'center', }}
                                name='x-twitter' color='#fff' size={26}
                            />
                            <View>
                                <Text style={styles.mainquesttxt2}>Rt, to X post and Comment</Text>
                                <Text style={styles.earntoken}>50.0 $ZNX</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.gobutton}
                        >
                            <Text style={styles.gobuttontxt}>Go</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainquests}>
                        <View style={{ flexDirection: 'row' }}>
                            <X
                                style={{ alignSelf: 'center', }}
                                name='x-twitter' color='#fff' size={26}
                            />
                            <View>
                                <Text style={styles.mainquesttxt2}>Like our X post</Text>
                                <Text style={styles.earntoken}>50.0 $ZNX</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.gobutton}
                        >
                            <Text style={styles.gobuttontxt}>Go</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainquests}>
                        <View style={{ flexDirection: 'row' }}>
                            <X
                                style={{ alignSelf: 'center', }}
                                name='x-twitter' color='#fff' size={26}
                            />
                            <View>
                                <Text style={styles.mainquesttxt2}>Post on X (Twitter)</Text>
                                <Text style={styles.earntoken}>70.0 $ZNX</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                        activeOpacity={0.6}
                            style={styles.gobutton}
                        >
                            <Text style={styles.gobuttontxt}>Go</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ZonixEarn

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,

    },
    title: {
        margin: 16,
        fontSize: 23,
        fontFamily: 'Orbitron-Medium',
        color: '#23D9B1'
    },
    mainqueststltle: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#23D9B1',
        borderRadius: 8,
        elevation: 5,
        justifyContent: 'center',
    },
    mainquesttitletxt: {
        padding: 10,
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: "#fff"
    },
    mainquests: {
        justifyContent: 'space-between',
        height: 90,
        width: '90%',
        alignSelf: 'center',
        borderColor: '#23D9B1',
        borderWidth: 1.5,
        marginVertical: '3%',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
    },
    mainquesttxt: {
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        color: "#fff",
        paddingLeft: 10,
        width: 150
    },
    gobutton: {
        height: 40,
        width: 70,
        backgroundColor: '#23D9B1',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gobuttontxt: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: "#fff",
    },
    earntoken: {
        color: 'lightgray',
        paddingLeft: 10,
        fontSize: 13
    },
    mainquesttxt2: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: "#fff",
        paddingLeft: 10,
        width: 200
    },
    mainqueststltle1: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#23D9B1',
        borderRadius: 8,
        elevation: 5,
        justifyContent: 'center',
        marginTop:'10%'
    },
})