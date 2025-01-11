import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/AntDesign'
import User from 'react-native-vector-icons/FontAwesome6'
import Edit from 'react-native-vector-icons/MaterialIcons'
import { launchImageLibrary } from 'react-native-image-picker'


const BloodEdit = () => {
    const navigation = useNavigation()
    const [selectedImage, setSelectedImage] = useState(null)

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
                placeholder='Name'
                placeholderTextColor='#877E7F'
            />

            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#877E7F'
            />

            <TouchableOpacity
                onPress={() => navigation.navigate('BloodProfile' as never)}
                style={styles.Loginbutton}
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
        backgroundColor: '#D80032',
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