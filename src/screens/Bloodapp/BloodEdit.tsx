import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/AntDesign'
import User from 'react-native-vector-icons/FontAwesome6'
import Edit from 'react-native-vector-icons/MaterialIcons'
import { launchImageLibrary } from 'react-native-image-picker'
import { useSelector } from 'react-redux'
import Store from '@react-native-firebase/firestore'
import Snackbar from 'react-native-snackbar'



const BloodEdit = ({ route }: any) => {
    const { Data } = route.params || {}
    console.log('Datahhhhhhhhh', Data)
    const navigation = useNavigation()
    const [selectedImage, setSelectedImage] = useState(Data ? Data.selectedImage : null)
    const [dataa, setData] = useState<any>(null)
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    const [name, setName] = useState(Data ? Data.Name : '')
    const [email, setEmail] = useState(Data ? Data.email : '')
    const [isloading, setIsloading] = useState(false)
    // console.log('gggggg',data.email)
    const [modelvisible, setModelVisible] = useState(false)
    const [isopen, setIsopen] = useState(false)


    const openImagePicker = () => {
        const options: any = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };


    const GetDatafromfirestore = async () => {
        try {
            // if (Email) {
            const data = await Store()
                .collection('BloodUsers')
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
                setData(threadsArray[0])
            }

            console.log('Data ======>', data)

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    useFocusEffect(useCallback(
        () => {
            GetDatafromfirestore()
            console.log('usefocus')
        },
        [],
    )
    )

    const updatePost = async () => {
        setModelVisible(true)
        try {
            await Store()
                .collection('BloodUsers')
                .doc(GetUser)
                .update({
                    Name: name,
                    email: email,
                    selectedImage: selectedImage,
                })
            console.log("Post updated successfuly")
            GetDatafromfirestore()
            // Snack()
            navigation.goBack()
        } catch (error) {
            console.log("Error", error)
        }
        setName(dataa.Name)
        setEmail(dataa.email)
        setSelectedImage(selectedImage)
    }

    // const Snack = () => {
    //     Snackbar.show({
    //         text: 'Hello world',
    //         duration: Snackbar.LENGTH_INDEFINITE,
    //         action: {
    //             text: 'UNDO',
    //             textColor: 'green',
    //             onPress: () => { /* Do something. */ },
    //         },
    //     });
    // }

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <View style={{ flexDirection: "row", margin: 16 }}>
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        onPress={() => navigation.navigate('BloodProfile1' as never)}
                    >
                        <Back
                            name='arrowleft' color='black' size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Edit Profile</Text>
                </View>
                <View style={{ alignSelf: 'center', marginTop: '7%', flexDirection: "row" }}>
                    {selectedImage ?
                        selectedImage &&
                        <Image style={{ height: 90, width: 90, borderRadius: 65, }} source={{ uri: selectedImage }} /> :
                        <User
                            name='circle-user' color='gray' size={90}
                        />
                    }
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-end', marginBottom: 10, }}
                        onPress={() => { openImagePicker() }}
                    >
                        <Edit
                            name='edit' color='black' size={18}
                        />
                    </TouchableOpacity>
                </View>

                <Modal
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
                            height: '17%',
                            width: '90%',
                            backgroundColor: '#E8315B',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#E8315B',
                            borderRadius: 20,
                        }}>
                            <View style={styles.modelcircle1}></View>
                            <View style={styles.modelcircle2}></View>
                            <View style={styles.modelcircle3}></View>

                            <Text style={{ color: '#fff', fontSize: 19, fontWeight: '500' }}>
                                Profile Updated Successfully ✔
                            </Text>
                            {/* <TouchableOpacity
                            onPress={() => {
                                setModelVisible(false);
                            }}
                        >
                            <Text style={{
                                color: '#fff',
                                marginTop: 15,
                                fontSize: 16,
                                fontWeight: '500',
                            }}>Ok</Text>
                        </TouchableOpacity> */}

                        </View>
                    </View>
                </Modal>

                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='Name'
                    placeholderTextColor='#877E7F'
                />

                <TextInput
                    style={styles.inputEmail}
                    value={email}
                    editable={false}
                    onChangeText={setEmail}
                    placeholder='Email'
                    placeholderTextColor='#877E7F'
                />

                <TouchableOpacity
                    onPress={() => { updatePost(); navigation.navigate('BloodProfile1' as never) }}
                    style={[styles.Loginbutton, { backgroundColor: '#D80032' }]}
                >
                    <Text style={styles.Loginbuttontxt}>Save Changes</Text>

                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BloodEdit

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
        marginLeft: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#877E7F',
        marginHorizontal: 15,
        marginVertical: '6%',
        color: 'black',
    },
    inputEmail: {
        borderBottomWidth: 1,
        borderColor: '#877E7F',
        marginHorizontal: 15,
        marginVertical: '6%',
        color: 'gray',
    },

    Loginbutton: {
        width: '90%',
        height: 60,
        borderRadius: 30,
        marginTop: '4%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    Loginbuttontxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    modelcircle1: {
        height: 40,
        width: 40,
        borderRadius: 25,
        backgroundColor: '#C52147',
        position: 'absolute',
        left: 0,
        top: 4,
    },
    modelcircle2: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    modelcircle3: {
        height: 35,
        width: 35,
        borderRadius: 25,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 50,
        top: 40,
    }
})