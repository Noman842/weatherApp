import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Cross from 'react-native-vector-icons/Entypo'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Profile from 'react-native-vector-icons/FontAwesome'
import Store from '@react-native-firebase/firestore'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'




const EditProfileThread = ({ route }: any) => {
    const { userdata } = route.params || {}
    const [name, setName] = useState(userdata?.name ? userdata.name : '')
    const [username, setUsername] = useState(userdata?.username ? userdata.username : '')
    const [bio, setBio] = useState(userdata?.bio ? userdata.bio:'')
    const [data, setData] = useState('')
    const GetUser = useSelector((state: any) => state.Email.email)
      const GetUsername = useSelector((state: any) => state.Email.userdata)
    

    const [selectedImage, setSelectedImage] = useState<any>(null)

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
    const navigation = useNavigation<any>()

    const updateProfile = async () => {
        Store()
            .collection('users')
            .doc(GetUsername)
            .update({
                name: userdata?.name,
                bio: userdata?.bio,
            })
            .then(() => {
                console.log(`User with Email:  ${GetUsername}  updated on    F I R E S T O R E   and   R E D U X  !`);
            })
        const filteredData = await Store()
            .collection('Post')
            .where('email', '==', GetUser)
            .get()

        const batch = Store().batch()


        const updateFields = {
            name: userdata?.name,
            bio: userdata?.bio
        }
        filteredData.forEach((document) => {
            const currentDocId = Store().collection('Post').doc(document.id)
            batch.update(currentDocId, updateFields)
        })
        console.log('Updating the profile on Threads Collection pls wait...')
        batch.commit()
    }


    return (
        <View style={styles.body}>
            <View style={{ margin: 18 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 150 }}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Cross
                                name='cross' color='#fff' size={23}
                            />
                        </TouchableOpacity>
                        <Text style={styles.titletxt}>Edit Profile</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            updateProfile();
                            navigation.navigate('ProfileThread1' as never,

                                { username: username, name: name, Image: selectedImage }
                            )
                        }}
                    >
                        <Text style={styles.titletxt}>Done</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.containertxt}>Username</Text>
                            <TextInput
                                value={username}
                                onChangeText={setUsername}
                                style={styles.Input}
                                placeholder='Username'
                                keyboardType='default'
                                maxLength={10}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => { openImagePicker(); launchCamera }}
                            style={{ alignSelf: 'center' }}
                        >
                            {selectedImage ?
                                selectedImage &&
                                <Image style={{ height: 60, width: 60, borderRadius: 40 }} source={{ uri: selectedImage }} /> :

                                <Profile
                                    style={{ marginRight: 1 }}
                                    name='user-circle' color='gray' size={55}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 15 }}>
                        <Text style={styles.containertxt}>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            style={styles.Inputname}
                            placeholder='Name'
                            maxLength={10}
                        />
                    </View>
                    <Text style={styles.containertxt}>Bio</Text>
                    <TextInput
                        value={bio}
                        onChangeText={setBio}
                        style={styles.Inputname}
                        placeholder='+ Write bio (100 words)'
                        multiline={true}
                        maxLength={100}
                    />
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.containertxt}>Private profile</Text>
                        <Text style={{ marginTop: 10 }}>
                            If you switch to public,anyone can see your threads and replies
                        </Text>
                    </View>

                </View>

            </View>
        </View>
    )
}

export default EditProfileThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010'
    },
    titletxt: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 12,
    },
    container: {
        height: 430,
        backgroundColor: '#181818',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 16,
    },
    containertxt: {
        color: '#fff',
        fontSize: 17,
    },
    Input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: 220
    },
    Inputname: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: '98%'
    }
})