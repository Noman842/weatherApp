import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import Edit from 'react-native-vector-icons/MaterialIcons'
import User from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'

const ShoppingSetting = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const navigation = useNavigation()


  const openImagePicker = () => {
    const options:any = {
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
    <View style={styles.body}>
      <View style={{ flexDirection: 'row', marginVertical: 30, marginLeft: 15, alignItems: 'center' }}>
        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen' as never)}
          >
            <Back
              name='chevron-back-outline' color="black" size={22}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 90 }}><Text style={styles.Account}>Account</Text></View>
      </View>

      <View style={styles.profileView}>
        {
          selectedImage ?
            selectedImage &&
            <Image style={{ height: 60, width: 60, borderRadius: 30, }} source={{ uri: selectedImage }} /> :
            <View style={styles.Profilepic}></View>
        }


        <View style={styles.Profilenameview}>
          <Text style={styles.Profilename}>Tony Stark</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.gmail}>tonystark911@gmail.com</Text>
            <TouchableOpacity
              onPress={openImagePicker}
            >
              <Edit
                style={{ marginLeft: 50 }}
                name='edit' color='black' size={18}
              /></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
        <User
          name='user' color='black' size={20}
        />
        <Text style={styles.personal}>Personal information</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
        <Edit
          name='language' color='black' size={20}
        />
        <Text style={styles.personal}>Language</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
        <Edit
          name='privacy-tip' color='black' size={20}
        />
        <Text style={styles.personal}>Privacy Policy</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
        <Edit
          name='help-outline' color='black' size={20}
        />
        <Text style={styles.personal}>Help Center</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>

      <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15 }}>
        <User
          name='setting' color='black' size={20}
        />
        <Text style={styles.personal}>Setting</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
      <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 15, }}>
        <Edit
          name='logout' color='red' size={20}
        />
        <Text style={styles.logout}>Log out</Text>
      </View>
    </View>
  )
}

export default ShoppingSetting

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fdeff3'
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
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
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
    marginLeft: 10,
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
    color: 'red',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 7,
    fontFamily: 'Poppins-Regular'
  }


})