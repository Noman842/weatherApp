import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Search from 'react-native-vector-icons/FontAwesome'
import Dots from 'react-native-vector-icons/Entypo'
import Profile from 'react-native-vector-icons/MaterialCommunityIcons'
import Rightarrow from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'
import Edit from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'


// import  { useState } from 'react'

const Contactinfo = ({ route }: any) => {
    const { Save, index } = route.params
    console.log('Data stored', Save)
    const navigation = useNavigation<any>()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    const [data, setData] = useState([])

    useFocusEffect(
        useCallback(() => {
            getStoredObjectValue()
        }, [])
    )

    const deleteContact = async (index: any) => {
        try {
            const filteredArray = data.filter((_, i) => i !== index)
            setData(filteredArray)
            const jsonValue = JSON.stringify(filteredArray)
            console.log('Contact LIst', jsonValue)
            await AsyncStorage.setItem('CONTACTS', jsonValue)
        } catch (error) {
            console.log('Error', error)
        }
        navigation.navigate('AllContacts' as never)
    }

    const getStoredObjectValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('CONTACTS')
            const storeddataList = JSON.parse(jsonValue as any)
            setData(storeddataList as any)
            console.log('Got Stored Value', storeddataList)
        } catch (error) {
            console.log('Error', error)
        }
    }


    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllContacts' as never)}
                        style={{ marginLeft: 9 }}>
                        <Icon
                            name="arrow-back" color="black" size={26}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headertxt}>Contact Info</Text></View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                    <View style={{ marginHorizontal: 25 }}><Search
                        name="search" size={20} color="black"
                    />
                    </View>
                    <Dots
                        name="dots-three-vertical" size={20} color="black"
                    />
                </View>
            </View>

            <View style={styles.profilepic}>
                <TouchableOpacity>
                    {Save.Image ? Save.Image &&
                        <Image style={{ height: 140, width: 140, borderRadius: 100, }} source={{ uri: Save.Image }} /> :
                        <Icon1 name="account-circle" size={140} color="grey" />
                    }</TouchableOpacity>
                <View style={{ alignSelf: 'flex-end', flexDirection: 'row', marginRight: 20 }}>
                    <TouchableOpacity onPress={() => deleteContact(index)}>
                        <Delete
                            style={{ marginHorizontal: 20 }}
                            name='delete' color='black' size={23}
                        /></TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('AddContact',{
                    Name:Save.ContactName,
                    Surname:Save.SurName,
                    Number:Save.PhoneNumber,
                    Image:Save.Image,
                    index:index
                    
                    })
                }>
                        <Edit
                            name='pen' color='black' size={19}
                        /></TouchableOpacity>
                </View>
                <Text style={styles.profiletxt}>{Save.ContactName} {Save.SurName}</Text>
            </View>

            {/* <View style={styles.profile}>
                <View>
                <Image style={{height:130,width:130}} source={require('./../images/account_circle.png')} />
                    <View style={{flexDirection:'row',}}><Text style={styles.profiletxt}>{Save.ContactName}</Text>
                    
                    <View style={{ flexDirection: "row",alignSelf:'flex-end'}}>
                    <Profile
                        name='delete' color="black" size={27}
                    />
                    <Dots
                        style={{ marginLeft: 10 }}
                        name='edit' color="black" size={27}
                    /></View>
                    </View>
                    </View>
              */}
            {/* </View> */}
            <View style={styles.number}>
                <Text style={styles.numbertxt}>{Save.PhoneNumber}</Text>
                <View style={styles.numbericon}>
                    <Icon
                        name='call' color="#fff" size={20}
                    />
                </View>
                <View style={styles.numbermsgicon}>
                    <Profile
                        name='android-messages' color="#fff" size={20}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.historytxt}>Call history</Text>
            </View>
            <View style={{ marginLeft: 10, marginVertical: 15, justifyContent: 'space-around' }}>
                <Text style={styles.callhistory}>Dec 5, 12:40</Text>
                {/* <Text style={{color:'black',position:'absolute'}}>Don't Connect </Text> */}
                <View style={{ flexDirection: 'row' }}><Text style={{ color: 'gray', fontWeight: '400' }}>+92315-3436783</Text>
                    <Rightarrow
                        style={{ marginLeft: 8 }}
                        name='arrow-up-right' color="gray" size={18}
                    />
                </View>
            </View>
            <View style={{ marginLeft: 10, marginVertical: 15, justifyContent: 'space-around' }}>
                <Text style={styles.callhistory}>Dec 1, 10:28</Text>
                {/* <Text style={{color:'black',position:'absolute'}}>Don't Connect </Text> */}
                <View style={{ flexDirection: 'row' }}><Text style={{ color: 'gray', fontWeight: '400' }}>+92315-3436783</Text>
                    <Rightarrow
                        style={{ marginLeft: 8, color: 'red' }}
                        name='arrow-down-right' color="gray" size={18}
                    />
                </View>
            </View>
            <View style={{ marginLeft: 10, marginVertical: 15, justifyContent: 'space-around' }}>
                <Text style={styles.callhistory}>Nov 25, 16:35</Text>
                {/* <Text style={{color:'black',position:'absolute'}}>Don't Connect </Text> */}
                <View style={{ flexDirection: 'row' }}><Text style={{ color: 'gray', fontWeight: '400' }}>+92315-3436783</Text>
                    <Rightarrow
                        style={{ marginLeft: 8 }}
                        name='arrow-up-right' color="gray" size={18}
                    />
                </View>
            </View>
            <View style={{ marginLeft: 10, marginVertical: 15, justifyContent: 'space-around' }}>
                <Text style={styles.callhistory}>Nov 19, 23:10</Text>
                {/* <Text style={{color:'black',width:100}}>Don't Connect </Text> */}
                <View style={{ flexDirection: 'row' }}><Text style={{ color: 'gray', fontWeight: '400' }}>+92315-3436783</Text>
                    <Rightarrow
                        style={{ marginLeft: 8, }}
                        name='arrow-up-right' color="gray" size={18}
                    />
                </View>
            </View>
        </View>
    )
}

export default Contactinfo

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    headertxt: {
        fontSize: 21,
        color: 'black',
        fontWeight: '500',
        marginLeft: 10,
    },
    header: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    profilepic: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    profiletxt: {
        color: 'black',
        fontSize: 24,
        fontWeight: '500'
    },
    number: {
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    numbertxt: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 12,
        marginVertical: 35,
    },
    numbericon: {
        height: 45,
        width: 45,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
    },
    numbermsgicon: {
        height: 45,
        width: 45,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: '#E9AD13',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    historytxt: {
        color: 'gray',
        marginLeft: 10,
        fontWeight: '500'
    },
    callhistory: {
        fontSize: 21,
        color: 'black',
        fontWeight: '500'
    }
})