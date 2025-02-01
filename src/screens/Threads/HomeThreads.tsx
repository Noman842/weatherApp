import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LogLevel, OneSignal } from 'react-native-onesignal';
import { useNavigation } from '@react-navigation/native';
import Store from '@react-native-firebase/firestore'

//Icons
import User from 'react-native-vector-icons/FontAwesome5'
import Gallery from 'react-native-vector-icons/Ionicons'
import Camera from 'react-native-vector-icons/Feather'
import GIF from 'react-native-vector-icons/MaterialCommunityIcons'
import Mic from 'react-native-vector-icons/Feather'
import Hash from 'react-native-vector-icons/Feather'
import Poll from 'react-native-vector-icons/Foundation'
import Location from 'react-native-vector-icons/Octicons'
import LikeIcon from 'react-native-vector-icons/AntDesign'
import MessageIcon from 'react-native-vector-icons/Ionicons'
import Save from 'react-native-vector-icons/Feather'
import Share from 'react-native-vector-icons/Feather'
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { adduserdata } from '../../store/Slice/EmailandData';




const HomeThreads = () => {
  const navigation = useNavigation<any>()



  const [data, setData] = useState<any>([])
  const [post, setPost] = useState<any>('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isloading, setIsloading] = useState(true)
  const [isrefresh, setIsRefresh] = useState(false)
  const GetUser = useSelector((state: any) => state.Email.email)
  const Dispatch = useDispatch()


  if (post) {
    console.log('Data+++++', post)
  }
  if (selectedImage) {
    console.log('SelectedImage====>', selectedImage)
  }


  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize("999f2278-f73d-4918-9e29-8a40b903585c");

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('OneSignal: notification clicked:', event);
  });




  const getdatafromfirestore = () => {
    try {
      const subs =
        Store()
          .collection('Post')
          .orderBy('createdAt', 'desc')
          .onSnapshot(documentSnapshot => {
            console.log('User data: ', documentSnapshot.docs);
            const Data = documentSnapshot.docs.map(item => item.data())
            if (Data) {
              console.log('Get Posts')
              setData(Data)
            } else { 'error' }
          });
      setIsloading(false);
      return () => subs();
    } catch (error) {
      console.error("Error fetching posts:", error);
      setIsloading(false);
    }
  }

  useEffect(() => {
    getdatafromfirestore()
    getDataFromFirebase()

  }, []);


  const getDataFromFirebase = () => {
    try {
      if (GetUser) {
        const subscriber = Store()
          .collection('users')
          .where('email', '==', GetUser)
          .onSnapshot(documentSnapshot => {
            console.log('Threads  at profile: ', documentSnapshot.docs)
            const threadsArray:any = documentSnapshot.docs.map(item => item.data())
            if (threadsArray) {
              console.log('userData is being Transferred to redux ', threadsArray)
              Dispatch(adduserdata(threadsArray[0]))
            }
          })
        return () => subscriber();
      } else {
        console.log('from Homescreen. There is no value in Email: ', GetUser)
      }

    } catch (error) {
      console.log('Err fetching Email from redux-persist', error)
    }
  }


  const renderlist = ({ item }: any) => {
    return (
      <View style={{ backgroundColor: '#101010', }}>
        {isloading ?
          <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
            <ActivityIndicator color='#fff' size='large' /></View> :
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('PostDetailThread' as never,
                { user: item },

              )}
            >
              <View style={{ marginHorizontal: 5, marginRight: 10, }}>
                <View style={{ flexDirection: "row", marginLeft: 10, }}>
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                    }}
                    source={require('./../../images/Instalogo.png')}
                  />
                  <Text style={styles.username}>{item?.name}</Text>
                </View>
                <View style={{ marginLeft: '15%', marginRight: '5%' }}>
                  <Text style={styles.post}>{item?.post}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 25 }}>
                  <TouchableOpacity>
                    <LikeIcon
                      style={{ marginHorizontal: 30 }}
                      name='hearto' color='#fff' size={18}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MessageIcon
                      name='chatbubble-outline' color='#fff' size={18}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Save
                      style={{ marginHorizontal: 30 }}

                      name='bookmark' color='#fff' size={18}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Share
                      name='send' color='#fff' size={17}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.line}></View>
            </TouchableOpacity>
          </>
        }
      </View>
    )
  }


  return (
    <View style={styles.body}>
      <Image style={{ height: 70, width: 55, alignSelf: 'center' }} source={require('./../../images/Threadslogo.png')} />
      <View style={{ margin: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginBottom: 20, }}>
          <Text style={styles.username}>For you</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>Following</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddPostThread' as never)}
        >
          <View>
            <View style={{ flexDirection: 'row' }}>
              <User
                name='user-circle' color='#fff' size={35}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: '#fff', fontSize: 16 }}>nomanejaz01</Text>
                <Text style={{ color: 'gray' }}>What's new</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginHorizontal: 15 }}>
              <TouchableOpacity

              >
                <Gallery
                  name='images-outline' color='gray' size={22}
                />
              </TouchableOpacity>
              <TouchableOpacity>
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
          </View>
        </TouchableOpacity>


      </View>
      <FlatList
        data={data}
        renderItem={renderlist}
        showsVerticalScrollIndicator={false}
        refreshing={isrefresh}
        onRefresh={getdatafromfirestore}
      />
    </View>
  )
}

export default HomeThreads

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#101010'
  },
  username: {
    color: '#fff',
    fontSize: 19,
    marginLeft: '4%',
    fontWeight: '500',
  },
  post: {
    color: '#fff',
    fontSize: 16,
  },
  line: {
    borderTopWidth: 0.2,
    borderColor: 'gray',
    marginVertical: 10,
  }
})