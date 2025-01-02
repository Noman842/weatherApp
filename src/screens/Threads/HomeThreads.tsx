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




const HomeThreads = () => {
  const navigation = useNavigation<any>()


  const [data, setData] = useState('')
  const [post, setPost] = useState<any>('')
  const [selectedImage, setSelectedImage] = useState(null)

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



  // useEffect(() => {
  //   getData()
  // }, [])

  // const getData = async () => {
  //   const usersPost = await Store().collection('users').doc('Post').get();
  //   const Info: any = usersPost.data()
  //   const Info2 = Info.Post
  //   setData(Info2)
  //   console.log('Users Data ====>', Info2)
  // }

  // const DataA = () => {
  //   const dataArray = [...data, { post: post }]
  //   setData(dataArray as any)
  //   console.log('Data====>', data)
  // }

  useEffect(() => {
    const Subs = Store()
      .collection('users')
      .doc('Post')
      .onSnapshot(Post => {
        console.log('User exists: ', Post.exists);
        if (Post.exists) {
          console.log('User data: ', Post.data());
          const Posts: any = Post.data()
          const Post2 = Posts.Post
          setData(Post2)
          console.log('True', Posts)


        }
      });
    return () => Subs()
  }, [])


  const Delete = () => {
    Store()
      .collection('users')
      .doc('Post')
      .delete()
      .then(() => {
        console.log('User deleted!');
      })
  }

  const renderlist = ({ item }: any) => {
    return (
      <View style={{ backgroundColor: '#101010', }}>
        <View style={{ marginHorizontal: 5, marginRight: 10, }}>
          <View style={{ flexDirection: 'row', marginRight: 25, }}>
            <Image style={{ height: 50, width: 50, }} source={require('./../../images/Sun.png')} />
            <View style={{ marginRight: 20, alignSelf: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 16, marginBottom: 3 }}>nomanejaz01</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('PostDetailThread' as never,
                  { item },

                )}
              >
                <Text style={{ color: '#fff' }}>{item.post}</Text>
                <View style={{height:180,width:280,backgroundColor:'#A1A1A1',alignItems:'center',justifyContent:'center'}}>
                <Image resizeMode='contain' style={{height:160,width:250}} source={{ uri: item?.selectedImage }} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
            <TouchableOpacity>
              <LikeIcon
                style={{ marginHorizontal: 30 }}
                name='hearto' color='#fff' size={18}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Delete}
            >
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
                <Text style={styles.username}>nomanejaz01</Text>
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
    fontSize: 16,
  },
  line: {
    borderTopWidth: 0.2,
    borderColor: 'gray',
    marginVertical: 10,
  }
})