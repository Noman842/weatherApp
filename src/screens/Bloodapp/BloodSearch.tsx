import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Store from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import Right from 'react-native-vector-icons/AntDesign'
import Search from 'react-native-vector-icons/Feather'
import Back from 'react-native-vector-icons/AntDesign'


const BloodSearch = () => {
    const [search, setSearch] = useState('')
    const [searchuser, setSearchUser] = useState()
    const navigation = useNavigation<any>()


    useEffect(() => {

        try {
            if (search !== '') {
                const subscriber = Store()
                    .collection('BloodDonate')
                    // .where('name', '==', search) This will not work because it matches the string exactly.
                    .onSnapshot(documentSnapshot => {
                        console.log('My array on Search screen', documentSnapshot.docs)
                        const regex = new RegExp(search, 'i')
                        const data: any = documentSnapshot?.docs?.map((item: any) => item.data()).filter((item) => regex.test(item?.BloodGroup))

                        console.log('d:', data)
                        setSearchUser(data)

                    })
                return () => subscriber();
            } else {
                console.log('Search is empty---->', search)
            }

        }

        catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }

    }, [search])


    const renderlist = ({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('BloodDetail' as never,
                    { data: item },
                )}
                style={styles.flatlistview}>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bloodgroup}>{item?.BloodGroup}</Text>
                        <Text style={styles.name}>{item?.Name}</Text>
                    </View>
                    <Right
                        style={{ alignSelf: 'center' }}
                        name='right' color='gray' size={28}
                    />
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={styles.body}>

            <View style={styles.headerview}>
                <View style={styles.circle1}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle3}></View>
                <View style={{ flexDirection: 'row', marginLeft: '3%' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ alignSelf: 'center' }}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titletxt}>Search Donors</Text>
                </View>
            </View>

         <Text style={{color:'gray',fontWeight:'500',marginLeft:'6%',marginTop:'3%',fontSize:13}}>Search by 
              <Text style={{color:'rgb(225, 58, 97)',fontWeight:'500',fontSize:13}}> BloodGroup</Text> eg.A+</Text>

            <View style={styles.search}>
                <Search
                    name='search' color='rgb(225, 58, 97)' size={25}
                />
                <TextInput
                    style={styles.searchinput}
                    placeholder='Search'
                    placeholderTextColor='gray'
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            <FlatList
                data={searchuser}
                renderItem={renderlist}
            />


        </SafeAreaView>
    )
}

export default BloodSearch

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerview: {
        height: 120,
        backgroundColor: '#E8315B',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    circle1: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: ' #C52147',
        zIndex: 1,
    },
    circle2: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: ' #D34B6A',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    circle3: {
        height: 45,
        width: 45,
        borderRadius: 25,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 50,
        top: 40,
    },
    titletxt: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '600',
        marginLeft: '2%',
        marginTop: 4,
    },
    flatlistview: {
        height: 80,
        width: '90%',
        marginVertical: '4%',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E8315B',
        padding: 20,
    },
    bloodgroup: {
        color: '#D9214B',
        fontSize: 25,
        fontWeight: '600'
    },
    name: {
        fontSize: 20,
        color: '#212121',
        fontWeight: '500',
        alignSelf: 'center',
        marginLeft: 10,
    },
    search: {
        height: 50,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#E8315B',
        marginBottom: 10,
        borderRadius: 15,
        color: 'black',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchinput: {
        height: 40,
        marginLeft: 3,
        color: 'black'
    }
})