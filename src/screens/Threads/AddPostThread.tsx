import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Cross from 'react-native-vector-icons/Entypo'
import Dots from 'react-native-vector-icons/MaterialCommunityIcons'
import User from 'react-native-vector-icons/FontAwesome5'
import Gallery from 'react-native-vector-icons/Ionicons'
import Camera from 'react-native-vector-icons/Feather'
import GIF from 'react-native-vector-icons/MaterialCommunityIcons'
import Mic from 'react-native-vector-icons/Feather'
import Hash from 'react-native-vector-icons/Feather'
import Poll from 'react-native-vector-icons/Foundation'
import Location from 'react-native-vector-icons/Octicons'
import Store from '@react-native-firebase/firestore'
import Profile from 'react-native-vector-icons/FontAwesome'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useSelector } from 'react-redux'





const AddPostThread = ({ route }: any) => {
  const Data = route.params
  const navigation = useNavigation()

  const [post, setPost] = useState<any>('')
  const [data, setData] = useState('')
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [button, setButton] = useState('gray')
  const GetUser = useSelector((state: any) => state.Email.email)
  const GetUsername = useSelector((state: any) => state.Email.userdata)
  console.log('GetUserdata',GetUsername)


  // if (GetUser) {
  //   console.log('UserData ++++++', GetUser)
  // } else {
  //   console.log('UserData ------')
  // }


  const storeToFirebase = () => {
    if (post == '') {
      Alert.alert('Post cannot be empty')
    } else {
      Store()
        .collection('Post')
        .add({
          post: post,
          email: GetUser,
          name: GetUsername?.name,
          bio:GetUsername?.bio,
          createdAt: Store.FieldValue.serverTimestamp()
        })
        .then(
          () => console.log('Data Stored')
        )
      setPost('')
      setSelectedImage('')
      Alert.alert('Post added ✔')
    }
  }

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


  const handleCameraLaunch = () => {
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  }



  return (
    <View style={styles.body}>
      <View style={{ margin: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ alignSelf: 'center' }}>
              <Cross
                name='cross' color='#fff' size={24}
              />
            </TouchableOpacity>
            <Text style={styles.title}>New thread</Text>
          </View>
          <TouchableOpacity>
            <Dots
              name='dots-horizontal-circle-outline' color='#fff' size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>

        <View style={{ flexDirection: 'row' }}>


          <Profile
            name='user-circle' color='gray' size={35}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.username}>{GetUser?.name}</Text>
            <TextInput
              style={{ marginRight: 25 }}
              value={post}
              onChangeText={setPost}
              multiline={true}
              placeholder='Whats new'
              placeholderTextColor='gray'
            />
          </View>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15, marginHorizontal: 15 }}>
          <TouchableOpacity
            onPress={openImagePicker}
          >
            <Gallery
              name='images-outline' color='gray' size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCameraLaunch}
          >
            <Camera
              name='camera' color='gray' size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <GIF
              name='file-gif-box' color='gray' size={27}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Mic
              name='mic' color='gray' size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Hash
              name='hash' color='gray' size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Poll
              name='graph-horizontal' color='gray' size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Location
              name='location' color='gray' size={22}
            />
          </TouchableOpacity>
        </View>

        {
          selectedImage &&
          <Image style={{ height: 210, width: '100%', alignSelf: 'center' }} source={{ uri: selectedImage }} />
        }
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 15, position: "absolute", marginHorizontal: 16, }}>
        <Text style={{ color: 'gray', fontSize: 16, alignSelf: 'center' }} >Your followers can reply & quote</Text>
        <TouchableOpacity
          onPress={() => { storeToFirebase(); }}
          style={styles.bottonbutton}
        >
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddPostThread

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#101010'
  },
  title: {
    fontSize: 21,
    color: '#fff',
    marginLeft: 15,
    fontWeight: '500',
  },
  username: {
    color: '#fff',
    fontSize: 16,
  },
  bottonbutton: {
    height: 40,
    width: 67,
    borderRadius: 20,
    backgroundColor: "#fff",
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  line: {
    marginVertical: 15,
    borderTopWidth: 0.3,
    borderColor: 'gray'
  }
})