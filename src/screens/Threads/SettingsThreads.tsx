import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth, { signOut } from '@react-native-firebase/auth'
// Icons
import Back from 'react-native-vector-icons/AntDesign'
import AddUser from 'react-native-vector-icons/Ionicons'
import Bell from 'react-native-vector-icons/Ionicons'
import Like from 'react-native-vector-icons/AntDesign'
import Save from 'react-native-vector-icons/Feather'
import Archive from 'react-native-vector-icons/FontAwesome6'
import Privacy from 'react-native-vector-icons/Feather'
import Accessibility from 'react-native-vector-icons/Foundation'
import User from 'react-native-vector-icons/FontAwesome5'
import Language from 'react-native-vector-icons/MaterialIcons'
import Flask from 'react-native-vector-icons/Ionicons'
import Help from 'react-native-vector-icons/Ionicons'
import About from 'react-native-vector-icons/Ionicons'



const SettingsThreads = () => {
    const navigation = useNavigation()
    const [isloading, setIsloading] = useState(false)

    const logout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        setIsloading(false)
    }
    
    return (
        <View style={styles.body}>
            {isloading ?
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
                    <ActivityIndicator color='blue' size='large' /></View> :

                <>
                    <View style={{ margin: 16, flex: 0.82 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <Back
                                    name='arrowleft' color='#fff' size={23}
                                />
                            </TouchableOpacity>
                            <Text style={styles.title}>Settings</Text>
                        </View>

                        <View style={{ marginVertical: 12 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('InviteFriendsThread' as never)}
                                style={{ flexDirection: 'row', }}
                            >
                                <AddUser
                                    name='person-add-outline' color='#fff' size={23}
                                />
                                <Text style={styles.Text}>Follow and invite friends</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <Bell
                                name='notifications-outline' color='#fff' size={23}
                            />
                            <Text style={styles.Text}>Notifications</Text>
                        </View>

                        <View style={{  marginVertical: 12 }}>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('LikedPostThread' as never)}
                            style={{flexDirection: 'row',}}
                            >
                            <Like
                                name='hearto' color='#fff' size={23}
                            />
                            <Text style={styles.Text}>Liked</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <Save
                                name='bookmark' color='#fff' size={23}
                            />
                            <Text style={styles.Text}>Saved</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <Archive
                                name='clock-rotate-left' color='#fff' size={23}
                            />
                            <Text style={styles.Text}>Archive</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <TouchableOpacity style={{ flexDirection: "row" }}
                                onPress={() => navigation.navigate('PrivacyScreenThreads' as never)}
                            >
                                <Privacy
                                    name='lock' color='#fff' size={23}
                                />
                                <Text style={styles.Text}>Privacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <Accessibility
                                name='universal-access' color='#fff' size={25}
                            />
                            <Text style={styles.Text}>Accessibility</Text>
                        </View>

                        <View style={{ marginVertical: 12 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('AccountThread' as never)}
                                style={{ flexDirection: 'row', }}>
                                <User
                                    name='user-circle' color='#fff' size={23}
                                />
                                <Text style={styles.Text}>Account</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <Language
                                name='language' color='#fff' size={23}
                            />
                            <Text style={styles.Text}>Language</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <Flask
                                name='flask-outline' color='#fff' size={23}
                            />
                            <Text style={styles.Text}>Early access</Text>
                        </View>

                        <View style={{ marginVertical: 12 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('HelpScreenThread' as never)}
                                style={{ flexDirection: 'row' }}>
                                <Help
                                    name='help-buoy-sharp' color='#fff' size={23}
                                />
                                <Text style={styles.Text}>Help</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 12 }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', }}
                                onPress={() => navigation.navigate('AboutThread' as never)}
                            >
                                <About
                                    name='information-circle-outline' color='#fff' size={24}
                                />
                                <Text style={styles.Text}>About</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.line}></View>
                    <View style={{ flex: 0.1, marginLeft: 13 }}>
                        <Text style={styles.switch}>Switch Account</Text>
                        <TouchableOpacity
                            onPress={() => { logout(); setIsloading(true) }}
                        >
                            <Text style={styles.logout}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>

    )
}

export default SettingsThreads

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 13,
        fontWeight: '500',
    },
    Text: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 13
    },
    line: {
        borderTopWidth: 0.3,
        borderColor: 'gray'
    },
    switch: {
        fontSize: 17,
        color: '#0366fc',
        marginVertical: 10
    },
    logout: {
        fontSize: 17,
        color: 'red',
        marginTop: 8,
    }
})