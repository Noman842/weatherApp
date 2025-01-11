import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import LikeIcon from 'react-native-vector-icons/AntDesign'
import MessageIcon from 'react-native-vector-icons/Ionicons'
import Save from 'react-native-vector-icons/Feather'
import Share from 'react-native-vector-icons/Feather'
import { removeItem } from '../../store/Slice/Slice'

const LikedPostThread = () => {
    const navigation = useNavigation()
    const SavedPost = useSelector((state: any) => state.cart.item)
    const dispatch = useDispatch()
    const [red, setRed] = useState('')
    const [yellow, setYellow] = useState('')
    // console.log('Data aaa rha',cartItems)


    return (
        <View style={styles.body}>
            <View style={{ margin: 16 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={23}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Saved</Text>
                </View>
                <ScrollView>
                    {SavedPost?.map((item: any) => (
                        console.log('Data aa rha hai', item),
                        <View key={item.id}
                            style={{ margin: 20, }}
                        >
                            <Text style={{ color: '#fff', fontSize: 16 }}>{item?.post}</Text>
                            <Image resizeMode='contain'
                                style={{ height: 170, width: 300 }}
                                source={{ uri: item?.selectedImage }}
                            />
                            <View style={{ flexDirection: 'row', margin: 15 }}>
                                <TouchableOpacity

                                    style={{ flexDirection: 'row' }}
                                    onPress={() => { setRed(red === '#fff' ? 'red' : '#fff') }}
                                >
                                    <LikeIcon
                                        style={{ marginLeft: 30 }}
                                        name='hearto' color={red} size={20}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MessageIcon
                                        name='chatbubble-outline' color='#fff' size={20}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { dispatch(removeItem(item)); setYellow(yellow === '#fff' ? '#F1C000' : '#fff') }}
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
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default LikedPostThread

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#101010'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '500'
    }
})