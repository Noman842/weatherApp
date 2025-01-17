import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Store from '@react-native-firebase/firestore'
import Right from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { adduserBlood } from '../../store/Slice/BloodSlice'
import Search from 'react-native-vector-icons/Feather'

const BloodDonor = () => {
    const [data, setData] = useState('')
    const [isloading, setIsloading] = useState(true)
    const [isrefresh, setIsRefresh] = useState(false)
    const navigation = useNavigation<any>()
    const Dispatch = useDispatch()


    const getdatafromfirestore = () => {
        try {
            const subs =
                Store()
                    .collection('BloodDonate')
                    .orderBy('createdAt', 'desc')
                    .onSnapshot(documentSnapshot => {
                        console.log('User data: ', documentSnapshot.docs);
                        const Data: any = documentSnapshot.docs.map(item => item.data())
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
    }, []);

    // const Getnamefromfirestore = () => {

    //     try {
    //         const subs =
    //             Store()
    //                 .collection('BloodUsers')
    //                 .where('email', '==', GetUser)
    //                 .onSnapshot(documentSnapshot => {
    //                     console.log('User data: Coming ', documentSnapshot.docs);
    //                     const Data: any = documentSnapshot.docs.map(item => item.data())
    //                     if (Data) {
    //                         console.log('Get Posts', Data)
    //                         setData(Data)
    //                         Dispatch(adduserBlood(Data[0]))

    //                     } else { 'error' }
    //                 });
    //         setIsloading(false);
    //         return () => subs();
    //     } catch (error) {
    //         console.error("Error fetching posts:", error);
    //         setIsloading(false);
    //     }
    // }

    const EmptyList = () => {
        return (

            data.length !== 0 ?

                <FlatList
                    data={data}
                    renderItem={renderlist}
                    showsVerticalScrollIndicator={false}
                    refreshing={isrefresh}
                    onRefresh={getdatafromfirestore}
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
            <View>
                {isloading ? <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 260 }}>
                    <ActivityIndicator color='#D80032' size='large' /></View> :
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodDetail' as never,
                            { data: item },
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
                        {/* <Text style={styles.namelocation}>{item.Location}</Text> */}
                    </TouchableOpacity>
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.headerview}>
                <View style={styles.circle1}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle3}></View>
                <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:'8%'}}>
                <Text style={styles.titletxt}>Find Donations</Text>
                <TouchableOpacity
                onPress={()=>navigation.navigate('BloodSearch' as never)}
                style={{alignSelf:'flex-end',marginRight:15}}
                >
                <Search
                        name='search' color= '#fff' size={25}
                    />
                </TouchableOpacity>
                </View>
            </View>
            <EmptyList />
        </SafeAreaView>
    )
}

export default BloodDonor

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
        borderRadius: 26,
        backgroundColor: '#C52147',
    },
    circle2: {
        height: 30,
        width: 30,
        borderRadius: 19,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 10,
        zIndex:1,
        top: 10,
    },
    circle3: {
        height: 45,
        width: 45,
        borderRadius: 25,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 35,
        top: 57,
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
    },
    namelocation: {
        fontSize: 15,
        color: '#212121',
        fontWeight: '500',
    },
    search: {
        height: 45,
        width: '90%',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E8315B'
    }
})