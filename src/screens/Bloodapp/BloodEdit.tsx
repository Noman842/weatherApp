import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/AntDesign'
import User from 'react-native-vector-icons/FontAwesome6'
import Edit from 'react-native-vector-icons/MaterialIcons'
import { launchImageLibrary } from 'react-native-image-picker'
import { useSelector } from 'react-redux'
import Store from '@react-native-firebase/firestore'


const BloodEdit = () => {
    const navigation = useNavigation()
    const [selectedImage, setSelectedImage] = useState(null)
    const [dataa, setData] = useState<any>(null)
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isloading, setIsloading] = useState(false)
    // console.log('gggggg',data.email)


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

            setTimeout(() => {
                if (threadsArray) {
                    console.log('my array', threadsArray)
                    setData(threadsArray[0])
                    setName(dataa?.Name)
                    setEmail(dataa?.email)
                }
            }, 2000);


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
        try {
            await Store()
                .collection('BloodUsers')
                .doc(GetUser)
                .update({
                    Name: dataa?.Name,
                    email: dataa?.email,
                    selectedImage: selectedImage,
                })
            console.log("Post deleted successfuly")
            GetDatafromfirestore()
            navigation.navigate('BloodMyDonations' as never)
        } catch (error) {
            console.log("Error", error)
        }
        setName(dataa.Name)
        setEmail(dataa.email)
    }



    return (
        <SafeAreaView style={styles.body}>
            <View style={{ flexDirection: "row", margin: 16 }}>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.goBack()}
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
                    onPress={() => { openImagePicker() }}
                >
                    <Edit
                        style={{ alignSelf: "flex-end" }}
                        name='edit' color='black' size={18}
                    />
                </TouchableOpacity>
            </View>


            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder='Name'
                placeholderTextColor='#877E7F'
            />

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Email'
                placeholderTextColor='#877E7F'
            />

            <TouchableOpacity
                disabled={name == '' || email == ''}
                onPress={() => updatePost()}
                style={[styles.Loginbutton, { backgroundColor: name == '' || email == '' ? 'gray' : '#D80032' }]}
            >
                <Text style={styles.Loginbuttontxt}>Save Changes</Text>

            </TouchableOpacity>
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
        color: '#877E7F',
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
})