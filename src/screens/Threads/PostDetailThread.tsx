import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cross from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/Slice/Slice'
import LikeIcon from 'react-native-vector-icons/AntDesign'
import MessageIcon from 'react-native-vector-icons/Ionicons'
import Save from 'react-native-vector-icons/Feather'
import Share from 'react-native-vector-icons/Feather'
import Store from '@react-native-firebase/firestore'



const PostDetailThread = ({ route }: any) => {
    const { user, } = route.params
    if (user) {
        console.log('Data*****', user)
    } else {
        console.log('Data#####',)
    }
    const navigation = useNavigation()
    const [isloading, setIsloading] = useState(false)
    const [data, setData] = useState<any>('')

    const GetUser = useSelector((state: any) => state.Email.email)


    useEffect(() => {

        try {
            const subs =
                Store()
                    .collection('Post')
                    .where('email', '==', user?.email)
                    .onSnapshot(documentSnapshot => {
                        console.log('User data: ', documentSnapshot.docs);
                        const Data: any = documentSnapshot.docs.map(item => item.data())
                        if (Data) {
                            console.log('Get Posts', Data)
                            setData(Data)
                        } else { 'error' }
                    });
            setIsloading(false);
            return () => subs();
        } catch (error) {
            console.error("Error fetching posts:", error);
            setIsloading(false);
        }
    }, []);

    const renderlist = ({ item }: any) => {
        return (
            <View style={{ marginBottom: '5%', marginRight: '5%', marginLeft: '5%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{
                            height: 30,
                            width: 30,
                        }}
                        source={require('./../../images/Instalogo.png')}
                    />
                    <Text style={styles.username}>{item?.name}</Text>
                </View>
                <Text style={styles.post}>{item?.post}</Text>

                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 25 }}>
                    <TouchableOpacity>
                        <LikeIcon
                            style={{ marginHorizontal: 17 }}
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
                            style={{ marginHorizontal: 17 }}

                            name='bookmark' color='#fff' size={18}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Share
                            name='send' color='#fff' size={17}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>

            </View>
        )
    }


    return (
        <View style={styles.body}>
            <View style={{ margin: 16 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Cross
                            name='cross' color='#fff' size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Delails</Text>
                </View>
                <View style={styles.usertitle}>
                    <Image style={{ height: 100, width: 100, marginRight: 10, alignSelf: "center" }} source={require('./../../images/Instalogo.png')} />
                    <View style={{ alignSelf: 'center', marginRight: 15, }}>
                        <View style={{ height: '1%' }}></View>
                        <Text style={{ color: '#fff', fontSize: 17, textAlign: 'center' }}>{data?.name}</Text>
                        <View style={{ margin: '1%' }}></View>

                        <Text style={{ color: '#fff', textAlign: 'center' }}>Hi! I'm a new user here and I am using Threads</Text>
                        <View style={{ marginVertical: '4%' }}>
                            <Text style={{ color: '#fff', fontSize: 24, fontWeight: '500',marginLeft:'4%' }}>Threads</Text>
                        </View>

                        <FlatList
                            data={data}
                            renderItem={renderlist}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                </View>

            </View>

        </View>
    )
}

export default PostDetailThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500'
    },
    usertitle: {
        marginTop: '7%'
    },
    post: {
        color: '#fff',
        fontSize: 15,
        marginLeft: '15%',
        marginRight:'6%',
        marginTop: 5,
    },
    username: {
        color: '#fff',
        fontSize: 19,
        marginLeft: 10,
        fontWeight: '500'
    },
    line: {
        borderTopWidth: 0.2,
        borderColor: 'gray',
        marginVertical: 10,
    },
 
})