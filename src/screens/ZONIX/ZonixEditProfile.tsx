import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import Profile from 'react-native-vector-icons/AntDesign'
import Camera from 'react-native-vector-icons/AntDesign'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';



const ZonixEditProfile = () => {
    const navigation = useNavigation<any>()
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



    return (
        <SafeAreaView style={styles.body}>
            <LinearGradient
                style={styles.body1}
                colors={['#121212', '#1F1F1F']}
                start={{ x: 1, y: 1, }}
                end={{ x: 0, y: 0 }}
            >

                <View style={styles.mainview}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Back
                                name='arrowleft' color='#fff' size={27}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Edit Profile</Text>
                    </View>



                    <View style={styles.ppview}>
                        {selectedImage ?
                            selectedImage &&
                            <Image
                                style={{
                                    height: 95, width: 95, borderRadius: 50, alignSelf: 'center',
                                }} source={{ uri: selectedImage }}
                            /> :
                            <Profile
                                style={{ alignSelf: 'center', top: 8 }}
                                name='user' color='#fff' size={70}
                            />
                        }
                        <TouchableOpacity
                            onPress={openImagePicker}
                            style={{ position: 'absolute', bottom: 8, right: 0, zIndex: 1 }}
                        >
                            <Camera
                                name='camera' size={19} color='#fff'
                            />
                        </TouchableOpacity>
                    </View>



                    <TextInput
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor='lightgray'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='username'
                        placeholderTextColor='lightgray'
                        editable={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='email'
                        placeholderTextColor='lightgray'
                        editable={false}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate("ZonixProfile" as never,
                            { image: selectedImage }
                        )}
                        activeOpacity={0.6}
                        style={styles.button}

                    >
                        <Text style={styles.buttontxt}>Done</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </SafeAreaView>
    )
}

export default ZonixEditProfile

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body1: {
        flex: 1,

    },
    mainview: {
        margin: 16,
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Orbitron-Medium',
        marginLeft: 10,
    },
    ppview: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: '#fff',
        alignSelf: 'center',
        marginVertical: '7%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#23D9B1',
        borderRadius: 10,
        padding: 10,
        marginVertical: '3%'
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#23D9B1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: '5%',
        elevation: 8,
    },
    buttontxt: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#fff',
    },
})