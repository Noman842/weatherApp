import { ActivityIndicator, Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/Ionicons'
import Edit from 'react-native-vector-icons/MaterialIcons'
import User from 'react-native-vector-icons/AntDesign'
import auth, { signOut } from '@react-native-firebase/auth'
import { launchImageLibrary } from 'react-native-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import Store from '@react-native-firebase/firestore'
import { useSelector } from 'react-redux'
import Donate from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'




const BloodProfile = () => {
    const navigation = useNavigation<any>()
    const [isloading, setIsloading] = useState(false)
    const [data, setData] = useState<any>('')
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    console.log('bvvvvvvv', GetUser)
    const [userdata, setUserData] = useState('')




    const logout = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'BloodLogin' }]
                }))
            })
        setIsloading(false)
    }


    const Getnamefromfirestore = () => {

        try {
            const subs =
                Store()
                    .collection('BloodUsers')
                    .where('email', '==', GetUser)
                    .onSnapshot(documentSnapshot => {
                        console.log('User data: Coming ', documentSnapshot.docs);
                        const Data: any = documentSnapshot.docs.map(item => item.data())
                        if (Data) {
                            console.log('Get Posts', Data)
                            setData(Data[0])
                        } else { 'error' }
                    });
            setIsloading(false);
            return () => subs();
        } catch (error) {
            console.error("Error fetching posts:", error);
            setIsloading(false);
        }
    }

    useEffect(() => {
        Getnamefromfirestore();
    }, []);

  const makeEmail = () => {
        if (Platform.OS === 'android') {
            Linking.openURL('mailto:nomanejaz0334@gmail.com')
        } else {
            Linking.openURL('mailtoprompt:nomanejaz0334@gmail.com')

        }
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.body}>
                {isloading ?
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
                        <ActivityIndicator color='#D80032' size='large' /></View> :
                    <>
                        <Text style={styles.Account}>Account</Text>
                        <View style={styles.profileView}>
                            {data?.selectedImage ?
                                data?.selectedImage &&
                                <Image style={{ height: 60, width: 60, borderRadius: 65 }} source={{ uri: data?.selectedImage }} /> :
                              <View style={styles.Profilepic}></View> 
                            }


                            <View style={styles.Profilenameview}>
                                <Text style={styles.Profilename}>{data?.Name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.gmail}>{data?.email}</Text>


                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
                        <View style={{ marginVertical: 15, marginLeft: 15, }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('BloodEdit' as never,
                                    { Data: data },
                                    console.log('Datatttttttt', data)
                                )}
                                style={{ flexDirection: 'row',width:'100%',height:25 }}
                            >
                                <User
                                    name='user' color='black' size={20}
                                />
                                <Text style={styles.personal}>Edit Profile</Text>
                            </TouchableOpacity >
                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
                        <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('BloodLanguage' as never)}
                            style={{flexDirection:'row',width:'100%',height:25}}
                            >
                            <Edit
                                name='language' color='black' size={20}
                            />
                            <Text style={styles.personal}>Language</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
                        <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('BloodPrivacy' as never)}
                            style={{flexDirection:'row',width:'100%',height:25}}
                            >
                            <Edit
                                name='privacy-tip' color='black' size={20}
                            />
                            <Text style={styles.personal}>Privacy Policy</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
                        <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
                            <TouchableOpacity
                            onPress={makeEmail}
                            style={{flexDirection:'row',width:'100%',height:25}}
                            >
                            <Edit
                                name='help-outline' color='black' size={20}
                            />
                            <Text style={styles.personal}>Help Center</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>

                        <View style={{ marginVertical: 15, marginLeft: 15 }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row',width:'100%',height:25 }}
                                onPress={() => navigation.navigate('BloodMyDonations' as never)}
                            >
                                <Donate
                                    name='send-outline' color='black' size={18}
                                />
                                <Text style={styles.personal}>My Donations</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
                        <View style={{ marginVertical: 15, marginLeft: 15, }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row',width:'100%',height:25 }}
                                onPress={() => { logout(); setIsloading(true) }}
                            >
                                <Edit
                                    name='logout' color='#D80032' size={20}
                                />
                                <Text style={styles.logout}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>
        </SafeAreaView>
    )
}

export default BloodProfile

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    back: {
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Account: {
        color: '#D80032',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: '10%'
    },
    profileView: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 15,

    },
    Profilepic: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'lightgray'
    },
    Profilenameview: {
        marginLeft: 7,
        marginTop:10,
    },
    Profilename: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    gmail: {
        color: 'gray'
    },
    personal: {
        color: 'black',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 7,
        fontFamily: 'Poppins-Regular'
    },
    logout: {
        color: '#D80032',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 7,
    }


})