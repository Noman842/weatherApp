import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Search from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';


export const home = () => {
    const [name, setname] = useState('')
    const navigation = useNavigation()


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const usersData = await firestore().collection('users').where('age', '>=', 18).get();
        console.log('Users Data ==>', usersData)
    }


    const storeToFirebase = () => {
        firestore()
            .collection('users')
            .add({
                name: name,
                age: 24
            })
            .then(
                () => console.log('Data Stored')
            )
            setname('')
    }

    return (
        <View style={styles.body}>
            <View style={styles.head}>
                <TextInput
                    style={styles.searchInput}
                    value={name}
                    onChangeText={setname}
                    placeholder='Search here'
                    placeholderTextColor='gray'
                />
                <View style={styles.cartIcon}>
                    <TouchableOpacity
                        onPress={() => storeToFirebase()}>
                        <Icon

                            style={{ alignSelf: 'center' }}
                            name='shoppingcart' color='black' size={20}
                        /></TouchableOpacity>
                </View>

            </View>
            <View style={{ flexDirection: 'row', marginVertical: 25 }}>
                <View style={styles.suggestion1}><Text style={styles.suggestiontxt}>Living Room</Text></View>
                <View style={styles.suggestion2}><Text style={styles.suggestiontxt2}>Dinning Room</Text></View>
                <View style={styles.suggestion2}><Text style={styles.suggestiontxt2}>Bed Room</Text></View>
                <View style={styles.suggestion4}><Text style={styles.suggestiontxt2}>Ba</Text></View>
            </View>

            <View style={styles.main1}>
                <View>
                    <View style={styles.container1}></View><Text style={styles.txt1}>Fresh space with plants</Text>
                </View>

                <View>
                    <View style={styles.container2}></View><Text style={styles.txt2}>Fresh space with plants</Text>
                </View>
            </View>
            <View style={styles.main1}>
                <View>
                    <View style={styles.container1}></View><Text style={styles.txt1}>Fresh space with plants</Text>
                </View>
                <View>
                    <View style={styles.container1}></View><Text style={styles.txt1}>Fresh space with plants</Text>
                </View>
                <View>
                    <View style={styles.container1}></View><Text style={styles.txt1}>Fresh space with plants</Text>
                </View>
            </View>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    head: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    searchInput: {
        height: 35,
        width: 270,
        color: 'black',
        backgroundColor: '#ededed',
        borderRadius: 9,
        paddingLeft: 10,
        fontSize: 12,
    },
    cartIcon: {
        height: 35,
        width: 35,
        borderRadius: 18,
        backgroundColor: '#ededed',
        justifyContent: 'center'
    },
    suggestion1: {
        height: 25,
        width: 90,
        backgroundColor: 'black',
        borderRadius: 5,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    suggestion2: {
        height: 25,
        width: 95,
        backgroundColor: '#ededed',
        borderRadius: 5,
        marginLeft: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    suggestion4: {
        height: 25,
        width: 95,
        backgroundColor: '#ededed',
        borderRadius: 5,
        marginLeft: 13,
        alignItems: 'flex-start',
        paddingLeft: 7,
        justifyContent: 'center',
    },
    suggestiontxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: 'white'
    },
    suggestiontxt2: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: 'gray',
    },
    main1: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    container1: {
        height: 230,
        width: 160,
        backgroundColor: 'lightgray',
        borderRadius: 10,
    },
    container2: {
        height: 170,
        width: 150,
        backgroundColor: 'lightgray',
        borderRadius: 10,
    },
    maintxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    txt1: {
        color: 'black',
        fontSize: 18,
        width: 180,
        fontFamily: 'Poppins-Regular',
    },
    txt2: {
        color: 'black',
        fontSize: 18,
        width: 180,
        fontFamily: 'Poppins-Regular',
    },
})