import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Alert, FlatList, } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Privacy from 'react-native-vector-icons/Feather'
import Chart from 'react-native-vector-icons/MaterialCommunityIcons'
import Drawer from 'react-native-vector-icons/MaterialCommunityIcons'
import Insta from 'react-native-vector-icons/AntDesign'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Profile from 'react-native-vector-icons/FontAwesome'
import Store from '@react-native-firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'



const ProfileThread = ({ route }: any) => {
    const Data = route.params
    const [data, setData] = useState('')
    const [userdata, setUserData] = useState('')

    console.log(data)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const navigation = useNavigation<any>()
    const [modelvisible, setModelVisible] = useState(false)
    const [isloading, setIsloading] = useState(false)
    const GetUser = useSelector((state: any) => state.Email.email)


    // useFocusEffect(useCallback(
    //     () => {
    //         try {
    //             if (GetUser) {
    //                 const subscriber = Store()
    //                     .collection('Post')
    //                     .where('email', '==', GetUser)
    //                     // .orderBy('createdAt', 'desc')
    //                     .onSnapshot(documentSnapshot => {
    //                         console.log('Threads  at Profile: ', documentSnapshot)
    //                         const threadsArray: any = documentSnapshot.docs.map(item => item.data())
    //                         if (threadsArray) {
    //                             console.log('my array', threadsArray)
    //                             setData(threadsArray)
    //                         }
    //                     })
    //                 return () => subscriber();
    //             } else {
    //                 console.log('from Homescreen. There is no value in Email: ', GetUser)
    //             }

    //         } catch (error) {
    //             console.log('Err fetching Email from redux-persist', error)
    //         }
    //     },
    //     [GetUser],
    // ))



    //   useEffect(() => {

    //     try {
    //       const subs =
    //       Store()
    //       .collection('Users')
    //       .doc(GetUser)
    //     //   .update({
    //     //       name: data?.name,
    //     //       bio: data?.bio,
    //     //   })
    //     //   .then(() => {
    //     //       useDispatch(addUser(data))
    //     //       console.log(`User with Email:  ${Email}  updated on    F I R E S T O R E   and   R E D U X  !`);
    //     //   })

    //   const filteredData = await Store()
    //       .collection('Threads')
    //       .where('email', '==', GetUser)
    //       .get()

    //   const batch = Store().batch()


    // //   const updateFields = {
    // //       name: data?.name,
    // //       bio: data?.bio
    // //   }

    // //   filteredData.forEach((document) => {
    // //       const currentDocId = Store().collection('Threads').doc(document.id)
    // //       batch.update(currentDocId, updateFields)
    // //   })
    // //   console.log('Updating the profile on Threads Collection pls wait...')
    // //   batch.commit()

    // }
    //   }, []);


    const GetDatafromfirestore = async () => {
        try {
            // if (Email) {
            const data = await Store()
                .collection('Post')
                .where('email', '==', GetUser)
                .orderBy('createdAt', 'desc')
                .get()

            const threadsArray: any = data.docs.map(item => ({
                id: item.id,
                ...item.data()
            })
            )
            console.log("Array ===>", threadsArray)
            if (threadsArray) {
                console.log('my array', threadsArray)
                setData(threadsArray)
            }

            console.log('Data ======>', data)

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    useEffect(() => {
        GetDatafromfirestore();
        Getnamefromfirestore();
    }, []);

    const deletePost = async (id: any) => {
        try {
            await Store()
                .collection('Post')
                .doc(id)
                .delete()
            console.log("Post deleted successfuly")
            GetDatafromfirestore()
        } catch (error) {
            console.log("Error", error)
        }
    }



    const Getnamefromfirestore = () => {

        try {
            const subs =
                Store()
                    .collection('users')
                    .where('email', '==', GetUser)
                    .onSnapshot(documentSnapshot => {
                        console.log('User data: Coming ', documentSnapshot.docs);
                        const Data: any = documentSnapshot.docs.map(item => item.data())
                        if (Data) {
                            console.log('Get Posts', Data)
                            setUserData(Data)
                        } else { 'error' }
                    });
            setIsloading(false);
            return () => subs();
        } catch (error) {
            console.error("Error fetching posts:", error);
            setIsloading(false);
        }
    }


    const renderlist = ({ item }: any) => {
        return (
            <View style={{ margin: "5%" }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{
                                height: 30,
                                width: 30,
                            }}
                            source={require('./../../images/Instalogo.png')}
                        />
                        <Text style={styles.username}>{item?.name}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => deletePost(item.id)}
                    >
                        <Delete
                            name='delete' color='#fff' size={22}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.post}>{item?.post}</Text>

                <View style={styles.line}></View>

            </View>
        )
    }

    const renderdata = ({ item }: any) => {
        return (
            <View style={{ marginVertical: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 15 }}>

                    <View>
                        <Text style={styles.Name}>{item?.name}</Text>
                        <Text style={styles.Username}>{item?.name}01</Text>
                        <Text style={{ fontWeight: "500" }}>0 follower</Text>
                    </View>
                    {Data?.Image ?
                        Data?.Image &&
                        <Image style={{ height: 60, width: 60, borderRadius: 40 }} source={{ uri: Data?.Image }} /> :

                        <Profile
                            name='user-circle' color='gray' size={55}
                        />
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={styles.body}>
            <View style={{ margin: 18 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PrivacyScreenThreads' as never)}
                    >
                        <Privacy
                            name='lock' color='#fff' size={22}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity>
                            <Chart
                                name='chart-box-outline' color='#fff' size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginHorizontal: 19 }}
                        >
                            <Insta
                                name='instagram' color='#fff' size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SettingsThreads' as never)}
                        >
                            <Drawer
                                name='align-horizontal-right' color='#fff' size={25}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <FlatList
                    data={userdata}
                    renderItem={renderdata}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditProfile' as never,
                            { userdata: Data },
                            console.log('userdata', userdata)
                        )}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttontxt}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setModelVisible(true)}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttontxt}>Share Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* <Modal
                    visible={modelvisible}
                    animationType='slide'
                    transparent={true}
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            height: '20%',
                            width: '90%',
                            backgroundColor: '#101010',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 20,
                        }}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Hello world</Text>
                            <TouchableOpacity
                                onPress={() => setModelVisible(false)}
                            >
                                <Text style={{ color: '#fff', marginTop: 15 }}>Go Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal> */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <Text style={styles.topnavigation}>
                        Threads
                    </Text>
                    <Text style={styles.topnavigation1}>
                        Replies
                    </Text>
                    <Text style={styles.topnavigation1}>Reposts
                    </Text>
                </View>
            </View>
            <View style={styles.line}><View style={styles.line1}></View></View>

            <FlatList
                data={data}
                renderItem={renderlist}
            />

        </View>
    )
}

export default ProfileThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010',
    },
    Name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Username: {
        color: '#fff',
        marginVertical: 3
    },
    button: {
        height: 30,
        width: 140,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 7,
        justifyContent: "center"
    },
    buttontxt: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    topnavigation: {
        color: '#fff',
        fontSize: 16,
    },
    topnavigation1: {
        color: 'gray',
        fontSize: 16,
    },
    line: {
        borderTopWidth: 0.2,
        borderColor: 'gray',

    },
    line1: {
        borderTopWidth: 1.3,
        borderColor: '#fff',
        width: 100,
        marginLeft: '5%',
    },
    post: {
        color: '#fff',
        fontSize: 15,
        marginLeft: '13%',
        marginRight: '6%',
        marginTop: 5,
    },
    username: {
        color: '#fff',
        fontSize: 19,
        marginLeft: 10,
        fontWeight: '500'
    },
})