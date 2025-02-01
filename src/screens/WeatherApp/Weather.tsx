import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, FlatList, Image, RefreshControl } from 'react-native'
import React, { useCallback } from 'react'
import { useFocusEffect, useNavigation, } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import Setting from 'react-native-vector-icons/Ionicons'
import Suncloud from 'react-native-vector-icons/FontAwesome5'
import Bolt from 'react-native-vector-icons/FontAwesome6'
import Sun from 'react-native-vector-icons/MaterialIcons'
import Geolocation from '@react-native-community/geolocation';



const API_KEY = '444175551fc22cee635468ec705bad5a'

const Weather = ({ route }: any) => {
    const { Data, position } = route.params
    console.log('Passed', Data)
    const navigation = useNavigation<any>()
    const [weatherData, setWeatherData] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [city, setCity] = useState<any>('')
    const [refresh, setRefresh] = useState(false)


    // useEffect(() => {
    //     getData()
    // }, [])



    const getData = async () => {
        setIsLoading(true)
        const URL = Data ? `https://api.openweathermap.org/data/2.5/forecast?q=${Data}&appid=${API_KEY}&units=metric` :
            `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`
        try {
            const responce: any = await fetch(URL)
            const data = await responce.json()
            if (responce.ok) {
                setWeatherData(data)
                setErrorMessage('')
            } else {
                setErrorMessage(data.message)
            }
            setIsLoading(false)
        } catch (error: any) {
            Alert.alert('Error', error)
            setErrorMessage(error)
        }

    }
    useFocusEffect(
        useCallback(
            () => {
                // getcity()
                console.log('got city', Data || position)

            },
            [],
        )

    )

    useFocusEffect(
        useCallback(() => {
            getData()
            console.log('your data got', Data)
        }, [Data])
    )

    const renderItem = ({ item }: any) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, height: 140, }}>
                <View style={styles.days}>
                    <Text style={styles.daystxt}>{item.main.temp}°C</Text>
                    {item?.weather[0]?.icon ? <Image
                        style={{ alignSelf: 'center' }}
                        onError={(e) => console.log('Image Load Error:', e.nativeEvent.error)}
                        height={60} width={60}
                        source={{ uri: `https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@4x.png` }} />
                        : <Text style={{ color: 'black' }}>Loading icon....</Text>
                    }
                    <Text style={styles.daystxt}>{date.getHours()}:{date.getMinutes()}</Text>
                </View>
            </View>
        )
    }
    const date = new Date()
    const months = [
        "Jan", "Feb", "Mar", "April", "May",
        "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ]



    return (

        <View style={styles.body}>
            <RefreshControl
                refreshing={refresh}
                onRefresh={getData}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ justifyContent: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Back
                            name='chevron-back-outline' color="#fff" size={26}

                        /></TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: '600', marginLeft: 6 }}>Back</Text>
                </View>
                <Setting
                    name='settings-outline' color='#fff' size={25}
                />
            </View>
            <View style={styles.today}>
                <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Overpass-Regular', fontWeight: '800' }}>Today</Text>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', }}>{months[date.getMonth()]},{date.getDate()}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <FlatList
                    data={weatherData.list}
                    renderItem={renderItem}
                    horizontal={true}
                    refreshing={refresh}
                    onRefresh={getData}
                />

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 30 }}>
                <Text style={styles.Forcast}>Next Forcast</Text>
                <Suncloud
                    name='calendar-alt' color='#fff' size={22}
                />
            </View>
            <View>

                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 1}</Text>
                    <Bolt
                        name='cloud-bolt' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>{weatherData?.list[9]?.main.temp}°C</Text>
                </View> */}


                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 2}</Text>
                    <Bolt
                        name='cloud' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>{weatherData?.list[17]?.main.temp}°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 3}</Text>
                    <Sun
                        name='sunny' color='#fab432' size={25}
                    />
                    <Text style={{ color: '#fff' }}>{weatherData?.list[25]?.main.temp}°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 4}</Text>
                    <Bolt
                        name='cloud' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>{weatherData?.list[32]?.main.temp}°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 5}</Text>
                    <Bolt
                        name='cloud-sun' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>{weatherData?.list[39]?.main.temp}°C</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 1}</Text>
                    <Bolt
                        name='cloud-bolt' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>{weatherData?.list[9]?.main.temp}°C</Text>
                </View> */}



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 1}</Text>
                    <Bolt
                        name='cloud-bolt' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>21°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 2}</Text>
                    <Bolt
                        name='cloud' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>21°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 3}</Text>
                    <Sun
                        name='sunny' color='#fab432' size={25}
                    />
                    <Text style={{ color: '#fff' }}>21°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 4}</Text>
                    <Bolt
                        name='cloud' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>21°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 25 }}>
                    <Text style={styles.Nextdays}>{months[date.getMonth()]},{date.getDate() + 5}</Text>
                    <Bolt
                        name='cloud-sun' color='#fafafa' size={22}
                    />
                    <Text style={{ color: '#fff' }}>21°C</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center', height: 40 }}>
                    <Sun
                        style={{ marginTop: 5 }}
                        name='sunny' color='#fff' size={24}
                    />
                    <Text style={styles.Accu}>AccuWeather</Text>
                </View>
            </View>
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#32b1fa'
    },
    today: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    days: {
        height: 100,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    daystxt: {
        color: '#fff',
        fontWeight: '500',
        marginVertical: 7,

    },
    Forcast: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        fontFamily: 'Overpass-Regular',
    },
    Nextdays: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'

    },
    dayscenter: {
        height: 100,
        width: 60,
        backgroundColor: '#88c4f4',
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#fafafa'
    },
    daystxtcenter: {
        color: '#fff',
        fontWeight: '500',
        paddingVertical: 8
    },
    Accu: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        marginLeft: 12,
    }
})