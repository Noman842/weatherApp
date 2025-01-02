import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Privacy from 'react-native-vector-icons/Feather'
import Chart from 'react-native-vector-icons/MaterialCommunityIcons'
import Drawer from 'react-native-vector-icons/MaterialCommunityIcons'
import Insta from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Profile from 'react-native-vector-icons/FontAwesome'
import Store from '@react-native-firebase/firestore'



const ProfileThread = ({route}:any) => {
    const Data = route.params
    const [data, setData] = useState('')
    const [name, setName] = useState('')
        const [username, setUsername] = useState( '')
    const navigation = useNavigation<any>()



    useEffect(() => {
        const Subs = Store()
          .collection('users')
          .doc('Data')
          .onSnapshot(Data => {
            console.log('User exists: ', Data.exists);
            if (Data.exists) {
              console.log('User data: ', Data.data());
              const Data2: any = Data.data()
              const Data3 = Data2.Data
              setData(Data3)
              console.log('True', Data2)
    
    
            }
          });
        return () => Subs()
      }, [])
    return (
        <View style={styles.body}>
            <View style={{ margin: 18 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PrivacyScreenThreads' as never)}
                    >
                        <Privacy
                            name='lock' color='#fff' size={22}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity>
                            <Chart
                                name='chart-box-outline' color='#fff' size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginHorizontal: 19 }}
                        >
                            <Insta
                                name='instagram' color='#fff' size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SettingsThreads' as never)}
                        >
                            <Drawer
                                name='align-horizontal-right' color='#fff' size={25}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                    <View>
                        <Text style={styles.Name}>
                           {name}
                        </Text>
                        <Text style={styles.Username}>{username}</Text>
                        <Text style={{ color: 'gray' }}>0 followers</Text>
                    </View>
                    {Data?.Image ?
                        Data?.Image &&
                        <Image style={{ height: 60, width: 60, borderRadius: 40 }} source={{ uri: Data?.Image }} /> :

                        <Profile
                            name='user-circle' color='gray' size={55}
                        />
                    }
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditProfile' as never,
                            // {Data:Data}
                        )}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttontxt}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttontxt}>Share Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <Text style={styles.topnavigation}>
                        Threads
                    </Text>
                    <Text style={styles.topnavigation1}>
                        Replies
                    </Text>
                    <Text style={styles.topnavigation1}>Reposts
                    </Text>
                </View>
            </View>
            <View style={styles.line}><View style={styles.line1}></View></View>
        </View>
    )
}

export default ProfileThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010',
    },
    Name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Username: {
        color: '#fff',
        marginVertical: 3
    },
    button: {
        height: 30,
        width: 140,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 7,
        justifyContent: "center"
    },
    buttontxt: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    topnavigation: {
        color: '#fff',
        fontSize: 16,
    },
    topnavigation1: {
        color: 'gray',
        fontSize: 16,
    },
    line:{
        borderTopWidth:1.5,
        borderColor:'gray'
    },
    line1:{
         borderTopWidth:1.3,
        borderColor:'#fff',
        width:110,
        marginLeft:20,
    }
})