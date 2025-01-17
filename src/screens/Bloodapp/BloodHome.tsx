import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bell from 'react-native-vector-icons/Feather'
import Location from 'react-native-vector-icons/Entypo'
import Check from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Store from '@react-native-firebase/firestore'
import { LogLevel, OneSignal } from 'react-native-onesignal';
import { useSelector } from 'react-redux'


const BloodHome = () => {
    const navigation = useNavigation()
    const [data, setData] = useState<any>()
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    console.log('Dtattttt', data)

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


    const getdatafromfirestore = () => {
        try {
            const subs =
                Store()
                    .collection('BloodUsers')
                    .where('email', '==', GetUser)
                    .onSnapshot(documentSnapshot => {
                        console.log('User data: ', documentSnapshot.docs);
                        const Data = documentSnapshot.docs.map(item => item.data())
                        if (Data) {
                            console.log('Get Posts')
                            setData(Data[0])
                        } else { 'error' }
                    });
            // setIsloading(false);
            return () => subs();
        } catch (error) {
            console.error("Error fetching posts:", error);
            // setIsloading(false);
        }
    }
    useEffect(() => {
        getdatafromfirestore()
    }, [])


    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.titleview}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                    <Image
                        source={require('./../../images/Blooddrop1.png')}
                    />
                    <Text style={styles.title}>Blood Bestow</Text>
                </View>
                <Bell
                    style={styles.bell}
                    name='bell' color='#490008' size={23}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Location
                    style={styles.location}
                    name='location-pin' color='#490008' size={34}
                />
                <Text style={styles.locationname}>{data?.city ||null}</Text>
            </View>


            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ height: 150, width: 150, }}
                        source={require('./../../images/Blooddonation.png')}
                    />
                    <Text numberOfLines={3} style={styles.containertxt}>
                        "The measure of life is not its DURATION but its DONATION"
                    </Text>
                </View>
            </View>

            <View style={styles.checkview}>
                <Text style={styles.check}>
                    You're eligible to Donate
                </Text>
                <Check
                    name='checkcircleo' color='#fff' size={19}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '7%',
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('FindDonor' as never)}
                    style={styles.donation}>
                    <Image
                        source={require('./../../images/bloodbag.png')}
                    />
                    <Text style={styles.donationtxt}>Blood Banks</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Donation' as never)}
                    style={styles.donation}>
                    <Image
                        style={{ height: 100, width: 100, }}
                        source={require('./../../images/blooddonate.png')}
                    />
                    <Text style={styles.donationtxt1}>Blood Donate</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default BloodHome

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleview: {
        width: '100%',
        height: 60,
        elevation: 6,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        color: "#490008",
        fontWeight: '600',
    },
    bell: {
        marginRight: 15,
        alignSelf: 'center'
    },
    location: {
        marginVertical: '5%',
        marginLeft: '5%'
    },
    locationname: {
        fontSize: 22,
        color: '#490008',
        alignSelf: 'center',
        fontWeight: '500'
    },
    container: {
        backgroundColor: '#f7f5f5',
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        borderRadius: 15,
        padding: 15,
        elevation: 2,
    },
    containertxt: {
        fontSize: 13,
        color: 'black',
        textAlign: 'center',
        width: 150,
        alignSelf: 'center',
        fontWeight: '500',
    },
    checkview: {
        backgroundColor: '#64F472',
        height: 40,
        width: '90%',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: '7%'
    },
    check: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
    donation: {
        height: 170,
        width: '45%',
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    donationtxt: {
        color: 'gray',
        fontWeight: '500',
        margin: 10
    },
    donationtxt1: {
        color: 'gray',
        fontWeight: '500',
        marginBottom: '20%'
    }
})