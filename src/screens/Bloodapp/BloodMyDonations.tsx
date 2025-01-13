import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Store from '@react-native-firebase/firestore'
import Right from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Back from 'react-native-vector-icons/AntDesign'

const BloodMyDonations = () => {
    const [isloading, setIsloading] = useState(true)
    const [isrefresh, setIsRefresh] = useState(false)
    const navigation = useNavigation<any>()
    const [data, setData] = useState('')
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)


    const GetDatafromfirestore = async () => {
        try {
            // if (Email) {
            const data = await Store()
                .collection('BloodDonate')
                .where('Email', '==', GetUser)
                .orderBy('createdAt', 'desc')
                .get()

            const threadsArray: any = data.docs.map(item => ({
                id: item.id,
                ...item.data()
            })
            )
            console.log("Array ===>", threadsArray)
            if (threadsArray) {
                console.log('my array', threadsArray)
                setData(threadsArray)
            }

            console.log('Data =>', data)

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    useEffect(() => {
        GetDatafromfirestore();
    }, []);

    const deletePost = async (id: any) => {
        try {
            await Store()
                .collection('BloodDonate')
                .doc(id)
                .delete()
            console.log("Post deleted successfuly")
            GetDatafromfirestore()
        } catch (error) {
            console.log("Error", error)
        }
    }

    const EmptyList = () => {
        return (

            data.length !== 0 ?

                <FlatList
                    data={data}
                    renderItem={renderlist}
                    showsVerticalScrollIndicator={false}
                    refreshing={isrefresh}
                    onRefresh={GetDatafromfirestore}
                /> :
                <Text style={{
                    color: 'gray',
                    margin: '10%',
                    alignSelf: 'center',
                    fontSize: 18,
                }}>No donations yet</Text>

        )
    }

    const renderlist = ({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('BloodDetail' as never,
                    { mydata: item },
                    console.log('Routing data', data)
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
                <View style={{
                    flexDirection: 'row', marginLeft: '6%',
                }}>
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-end', marginRight: 7, }}
                        onPress={() => navigation.navigate('BloodProfile1' as never)}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titletxt}>My Donations</Text>
                </View>

            </View>

            <EmptyList />
        </SafeAreaView>
    )
}

export default BloodMyDonations

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerview: {
        height: '16%',
        backgroundColor: '#E8315B',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    circle1: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#C52147',
    },
    circle2: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#D34B6A',
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
        marginTop: 10,
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
    }
})