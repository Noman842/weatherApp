import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cross from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import Profile from 'react-native-vector-icons/FontAwesome'
import Store from '@react-native-firebase/firestore'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'




const EditProfileThread = ({ route }: any) => {
    const { Data, index } = route.params || {}
    const [name, setName] = useState(Data?.name ? Data.name : '')
    const [username, setUsername] = useState(Data?.username ? Data.username : '')
    const [bio, setBio] = useState('')
    const [data, setData] = useState('')

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
    useEffect(() => {
        getData()
      }, [])
    
      const getData = async () => {
        const usersData = await Store().collection('users').doc('Data').get();
        const Info: any = usersData.data()
        const Info2 = Info.Data
        setData(Info2)
        console.log('Users Post ====>', Info2)
      }
    
      const DataA = () => {
        const Array = [...data, {name:name,username:username,bio:bio }]
        storeToFirebase(Array)
        setData(Array as any)
        console.log('Data====>', data)
      }
    
      const storeToFirebase = (Array: any) => {
        Store()
          .collection('users')
          .doc('Data')
          .set({
            Data: Array,
          })
          .then(
            () => console.log('Name,Username,bio stored')
          )
    
      }

    const SaveData = () => {
        if (selectedImage !== '') {
            const dataArray = [...data, { Image: selectedImage, }]
            console.log('Data', dataArray)
            storeObjectValue(dataArray)
            setData(dataArray as any)
            setSelectedImage(null)
            navigation.navigate('ProfileThread1' as never)
        }
        else {
            Alert.alert('Please fill the required info.')
        }
    }
    const storeObjectValue = async (dataList: any) => {
        try {
            const jsonValue = JSON.stringify(dataList)
            console.log('Contact LIst', dataList)
            await AsyncStorage.setItem('CONTACTS', jsonValue)
            console.log('Your value stored')
        } catch (error) {
            console.log('Error', error)
        }
    }


    const getStoredObjectValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('CONTACTS')
            const storeddataList = JSON.parse(jsonValue as any)
            setData(storeddataList as any)
            console.log('Got Stored Value', storeddataList)
        } catch (error) {
            console.log('Error', error)
        }
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
                        onPress={() => {DataA();
                            SaveData();
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
                        />
                    </View>
                    <Text style={styles.containertxt}>Bio</Text>
                    <TextInput
                        value={bio}
                        onChangeText={setBio}
                        style={styles.Inputname}
                        placeholder='+ Write bio'
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
        width: '270%'
    },
    Inputname: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: '98%'
    }
})