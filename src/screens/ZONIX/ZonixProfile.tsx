import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Profile from 'react-native-vector-icons/AntDesign'
import Right from 'react-native-vector-icons/AntDesign'
import Privacy from 'react-native-vector-icons/Octicons'
import Info from 'react-native-vector-icons/Feather'
import Web from 'react-native-vector-icons/MaterialCommunityIcons'
import Telegram from 'react-native-vector-icons/FontAwesome'
import X from 'react-native-vector-icons/FontAwesome6'
import LogOut from 'react-native-vector-icons/Feather'
import PP from 'react-native-vector-icons/FontAwesome'






const ZonixProfile = ({ route }: any) => {
    const { image } = route.params || {}
    const navigation = useNavigation()
    const [isloading, setIsloading] = useState(false)


    const logout = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'ZonixLogin' }]
                }))
            })
        setIsloading(false)
    }

    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >
                <Text style={styles.title}>
                    Profile
                </Text>

                <ScrollView>


                    <View style={styles.ppview}>
                        {image ?
                            image &&
                            <Image
                                style={{
                                    height: 95, width: 95, borderRadius: 50, alignSelf: 'center',
                                }} source={{ uri: image }}
                            /> :
                            <Profile
                                name='user' color='#fff' size={70}
                            />
                        }
                    </View>

                    <Text style={styles.user}>zonixuser</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ZonixEditProfile' as never)}
                        activeOpacity={0.7}
                        style={styles.buttons}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Profile
                                style={{ alignSelf: 'center' }}
                                name='user' color='#fff' size={20}
                            />
                            <Text style={styles.buttonstxt}>Edit Profile</Text>
                        </View>

                        <Right
                            name='right' color='#fff' size={20}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttons}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Privacy
                                style={{ alignSelf: 'center' }}
                                name='shield-lock' color='#fff' size={20}
                            />
                            <Text style={styles.buttonstxt}>Privacy and policy</Text>
                        </View>

                        <Right
                            name='right' color='#fff' size={20}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttons}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Info
                                style={{ alignSelf: 'center' }}
                                name='info' color='#fff' size={21}
                            />
                            <Text style={styles.buttonstxt}>App Info</Text>
                        </View>

                        <Right
                            name='right' color='#fff' size={20}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttons}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Web
                                style={{ alignSelf: 'center' }}
                                name='web' color='#fff' size={22}
                            />
                            <Text style={styles.buttonstxt}>Website</Text>
                        </View>

                        <Right
                            name='right' color='#fff' size={20}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttons}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <X
                                style={{ alignSelf: 'center' }}
                                name='x-twitter' color='#fff' size={20}
                            />
                            <Text style={styles.buttonstxt}>Telegram</Text>
                        </View>

                        <Right
                            name='right' color='#fff' size={20}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttons}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Telegram
                                style={{ alignSelf: 'center' }}
                                name='paper-plane-o' color='#fff' size={21}
                            />
                            <Text style={styles.buttonstxt}>Telegram</Text>
                        </View>

                        <Right
                            name='right' color='#fff' size={20}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={logout}
                        activeOpacity={0.7}
                        style={styles.buttons}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <LogOut
                                style={{ alignSelf: 'center' }}
                                name='log-out' color='#23D9B1' size={20}
                            />
                            <Text style={styles.buttonstxtlog}>Log out</Text>
                        </View>

                        <Right
                            name='right' color='#23D9B1' size={20}
                        />
                    </TouchableOpacity>
                </ScrollView>


            </LinearGradient>
        </SafeAreaView>

    )
}

export default ZonixProfile

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
    buttons: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#23D9B1',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '3%'
    },
    buttonstxt: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 10,
        fontFamily: 'Poppins-Regular',
        marginTop: 3,
    },
    buttonstxtlog: {
        fontSize: 16,
        color: '#23D9B1',
        marginLeft: 10,
        fontFamily: 'Poppins-Regular',
        marginTop: 3,
    },
    title: {
        margin: 16,
        fontSize: 23,
        fontFamily: 'Orbitron-Medium',
        color: '#23D9B1',
        marginLeft: '8%'
    },
    user: {
        marginBottom: '2%',
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: "#23D9B1",
        height: 30,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 7,
        fontFamily: 'Poppins-Medium',
    },
    ppview: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: '#fff',
        alignSelf: 'center',
        marginBottom: '3%',
        justifyContent: 'center',
        alignItems: "center"
    }
})