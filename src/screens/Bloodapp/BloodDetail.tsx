import { Alert, Linking, SafeAreaView, StyleSheet, Text, View, PermissionsAndroid, Platform, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import Store from '@react-native-firebase/firestore'
import Edit from 'react-native-vector-icons/MaterialIcons'
import Phone from 'react-native-vector-icons/Feather'
import { MenuProvider } from 'react-native-popup-menu';
import Dots from 'react-native-vector-icons/Entypo'



const BloodDetail = ({ route }: any) => {
    const { mydata, data } = route.params
    console.log('Data=====>', data)
    const navigation = useNavigation<any>()
    const [dataa, setData] = useState<any>('')
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    const [modelvisible, setModelVisible] = useState(false)
    const [isopen, setIsopen] = useState(false)


    const GetDatafromfirestore = async () => {
        try {
            // if (Email) {
            const data = await Store()
                .collection('BloodDonate')
                .where('Email', '==', GetUser)
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
                setData(threadsArray[0])
            }

            console.log('Data ====>', data)

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    useEffect(() => {
        GetDatafromfirestore();
    }, []);

    const deletePost = async (id: any) => {
        try {
            await Store()
                .collection('BloodDonate')
                .doc(id)
                .delete()
            console.log("Post deleted successfuly")
            GetDatafromfirestore()
            navigation.goBack()
        } catch (error) {
            console.log("Error", error)
        }
    }

    const makePhoneCall = () => {
        if (Platform.OS === 'android') {
            Linking.openURL(`tel:${data ? data?.Number : mydata.Number}`)
        } else {
            Linking.openURL(`telprompt:${data ? data?.Number : mydata.Number}`)

        }
    };
    const makeEmail = () => {
        if (Platform.OS === 'android') {
            Linking.openURL(`mailto:${data ? data?.Email : mydata.Email}`)
        } else {
            Linking.openURL(`mailtoprompt:${data ? data?.Number : mydata.Number}`)

        }
    }

    return (
        <SafeAreaView style={styles.body}>

            {/* <Modal
                visible={modelvisible}
                transparent={true}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    right: 35,
                }}>
                    <View style={{
                        height: '13%',
                        width: '30%',
                        backgroundColor: '#fff',
                        padding: 10,
                        borderWidth: .5,
                        borderColor: 'gray',
                        borderRadius: 10,
                        position: 'absolute',
                        top: 10,
                    }}>
                        <TouchableOpacity

                            onPress={() => {
                                deletePost(dataa?.id);
                                setModelVisible(false);
                            }}
                        >

                            <Text style={{
                                color: 'black',
                                marginTop: 15,
                                fontSize: 17,
                                fontWeight: '500',
                            }}>Delete </Text>
                        </TouchableOpacity>

                        <View style={styles.line}></View>
                        <TouchableOpacity
                            style={{ flexDirection: "row", justifyContent: 'space-between' }}
                            onPress={() => navigation.navigate('BloodDonate' as never,
                                { useredit: mydata }

                            )}
                        >
                            <Text style={{
                                color: 'black',
                                marginTop: 15,
                                fontSize: 17,
                                fontWeight: '500',
                            }}>Edit </Text>
                            <Edit
                                style={{ alignSelf: 'flex-end' }}
                                name='edit' color='black' size={18}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal> */}
            <View style={styles.titleview}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ margin: 12 }}
                            onPress={() => navigation.goBack()}
                        >
                            <Back
                                name='arrowleft' color='#fff' size={25}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Details</Text>
                    </View>
                    {mydata?
                    <TouchableOpacity
                        onPress={() => deletePost(dataa?.id)}
                        style={{ marginRight: '5%', marginTop: '5%' }}
                    >
                        <Delete
                            name='delete' color='#fff' size={20}
                        />
                    </TouchableOpacity>:
                    null
}

                </View>


                <Text style={styles.name0}>{data ? data?.Name : mydata.Name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.name1}>{data ? data?.Email : mydata.Email}</Text>
                    {mydata?
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodDonate' as never,
                            { useredit: mydata }
                        )}
                        style={{ alignSelf: 'center', marginLeft: 10 }}

                    >
                        <Edit
                            name='edit' color='#fff' size={20}
                        />
                    </TouchableOpacity>:
                    null
}

                </View>
            </View>







            <View style={{
                flexDirection: 'row', justifyContent: 'space-around', marginVertical: '4%'
            }}>
                <TouchableOpacity
                    onPress={() => makePhoneCall()}
                    style={styles.touch}>

                    <Phone
                        style={{ alignSelf: 'center' }}
                        name='phone' color='#fff' size={18}
                    />
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>  Contact me</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => makeEmail()}
                    style={styles.touch2}>
                    <Phone
                        style={{ alignSelf: 'center' }}
                        name='mail' color='gray' size={18}
                    />
                    <Text style={{ color: 'gray', fontSize: 16, fontWeight: '500' }}>  Send Mail</Text>
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <View style={styles.views}>
                    <Text style={styles.userdata}> {data ? data?.BloodGroup : mydata.BloodGroup}</Text>
                    <Text style={styles.userdata2}>Blood Type</Text>
                </View>

                <View style={styles.views}>
                    <Text style={styles.userdata}>{data ? data?.BloodQuantity : mydata.BloodQuantity}</Text>
                    <Text style={styles.userdata2}>Quantity</Text>
                </View>

                <View style={styles.views}>
                    <Text style={styles.userdata}>{data ? data?.Gender : mydata.Gender}</Text>
                    <Text style={styles.userdata2}>Gender</Text>
                </View>

            </View>

            <View style={styles.views2}>
                <Text style={styles.nextinfo}>Age: </Text>
                <Text style={styles.nextinfo2}>{data ? data?.Age : mydata.Age}</Text>
            </View>

            <View style={styles.views2}>
                <Text style={styles.nextinfo}>Contact Number: </Text>
                <Text style={styles.nextinfo2}> {data ? data?.Number : mydata.Number}</Text>
            </View>

            <View style={styles.views2}>
                <Text style={styles.nextinfo}>Location: </Text>
                <Text style={styles.nextinfo2}>{data ? data?.Location : mydata.Location}</Text></View>





        </SafeAreaView>
    )
}

export default BloodDetail

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleview: {
        height: 170,
        width: '100%',
        backgroundColor: '#E8315B',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: '#fff',
        marginVertical: 10,
    },

    name0: {
        fontSize: 27,
        fontWeight: '500',
        marginVertical: '3%',
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        top: 35
    },
    name1: {
        fontSize: 15,
        fontWeight: '500',
        marginVertical: '8%',
        color: '#fff',
    },
    line: {
        marginVertical: 1,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    views: {
        height: 80,
        width: 100,
        borderRadius: 16,
        backgroundColor: '#f2f2f2',
        justifyContent: "center",
        alignItems: 'center'
    },
    touch: {
        height: 50,
        width: 150,
        borderRadius: 30,
        backgroundColor: "#E8315B",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch2: {
        height: 50,
        width: 150,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    userdata: {
        fontSize: 22,
        color: '#E8315B',
        fontWeight: '500'
    },
    userdata2: {
        color: 'black',
        fontSize: 11,
        fontWeight: '500'
    },
    views2: {
        height: 50,
        width: '90%',
        borderRadius: 13,
        backgroundColor: '#f2f2f2',
        marginVertical: '5%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    nextinfo: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    nextinfo2: {
        color: '#E8315B',
        fontSize: 18,
        fontWeight: '500'

    }
})