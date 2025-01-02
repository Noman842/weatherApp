import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Cross from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/Slice/Slice'
import LikeIcon from 'react-native-vector-icons/AntDesign'
import MessageIcon from 'react-native-vector-icons/Ionicons'
import Save from 'react-native-vector-icons/Feather'
import Share from 'react-native-vector-icons/Feather'



const PostDetailThread = ({ route }: any) => {
    const { item } = route.params || {}
    const navigation = useNavigation()

    const [red, setRed] = useState('')
    const [yellow, setYellow] = useState('')
    const [count, setCount] = useState<any>(0)

    const dispatch = useDispatch();

    const addtolike = () => {
        dispatch(addItem(item))
        console.log('Data liked', item)
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
                    <Image style={{ height: 50, width: 50, }} source={require('./../../images/Sun.png')} />
                    <View style={{ alignSelf: 'center', marginRight: 15, marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 17 }}>nomanejaz01</Text>
                        <Text style={styles.post}>{item?.post}</Text>

                        <Image resizeMode='contain' style={{ height: 160, width: 250 }}
                            source={{ uri: item?.selectedImage }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <TouchableOpacity
                    disabled={count >= 1 }
                        style={{ flexDirection: 'row' }}
                        onPress={() => {addtolike(); setRed(red === '#fff' ? 'red' : '#fff');[setCount(count + 1)] }}
                    >
                        <LikeIcon
                            style={{ marginLeft: 30 }}
                            name='hearto' color={red} size={20}
                        />
                        <Text style={{marginRight:28}}>  {count}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MessageIcon
                            name='chatbubble-outline' color='#fff' size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setYellow(yellow === '#fff' ? '#F1C000' : '#fff')}
                    >
                        <Save
                            style={{ marginHorizontal: 30 }}

                            name='bookmark' color={yellow} size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Share
                            name='send' color='#fff' size={20}
                        />
                    </TouchableOpacity>
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
        flexDirection: 'row',
        marginTop: 20,
        marginRight: 10,
    },
    post: {
        color: '#fff',
        fontSize: 15,
        marginRight: 10,
        marginTop: 5
    }
})