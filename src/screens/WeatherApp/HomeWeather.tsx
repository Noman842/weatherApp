import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Location from 'react-native-vector-icons/EvilIcons'
import Notification from 'react-native-vector-icons/Ionicons'
import Down from 'react-native-vector-icons/AntDesign'
import Wind from 'react-native-vector-icons/FontAwesome5'
import Drop from 'react-native-vector-icons/Feather'
import Geolocation from '@react-native-community/geolocation';


const API_KEY = '444175551fc22cee635468ec705bad5a'

const HomeWeather = () => {
    const navigation = useNavigation<any>()
    const [weatherData, setWeatherData] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)
    const [city, setCity] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [position, setposition] = useState({})

    useEffect(() => {
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        console.log('Maps Added')
        Geolocation.getCurrentPosition(
            (pos) => {
                console.log('Your Cords', pos);
                getData(pos)
                setposition(pos)
            },
            (error) => console.log('GetCurrentPosition Error', JSON.stringify(error))
        );
    }


    const getData = async (pos: any) => {
        setIsLoading(true)
        const URL = city ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric` :
            `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`
        try {
            const responce = await fetch(URL)
            const data = await responce.json()
            console.log('Responce ', JSON.stringify(data))
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
    const date = new Date()
    const months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"

    ]

    return (
        <View style={{ flex: 1, justifyContent: 'center', }}>
            <View style={{ backgroundColor: '#49a3f3', }}>
                <TextInput
                    style={{ color: '#fff', backgroundColor: '#49a3f3', paddingLeft: 10, borderWidth: 1, borderColor: '#fff', borderRadius: 9, marginHorizontal: 10, height: 50, marginTop: 10, }}
                    placeholder='Enter City'
                    value={city}
                    onChangeText={setCity}
                />
                <TouchableOpacity disabled={city === '' ? true : false} onPress={getCurrentLocation}>
                    <Text style={{ color: '#fff', textAlign: 'center', backgroundColor: "#49a3f3", borderWidth: 1, borderColor: '#fff', height: 40, width: 70, alignSelf: 'center', marginTop: 10, borderRadius: 10, padding: 10 }}>Search</Text>
                </TouchableOpacity>
            </View>
            {
                isLoading ? <ActivityIndicator style={{ flex: 1, backgroundColor: '#49a3f3' }} size='large' color='blue' /> :
                    <>
                        {errorMessage ?
                            <View style={{ backgroundColor: '#49a3f3', flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 20, textAlign: "center", }}>{errorMessage}</Text>
                            </View> :

                            <View style={styles.body}>
                                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 15, height: 20, marginTop: 25 }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Location
                                            name='location' color='#fff' size={24}
                                        />
                                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, marginHorizontal: 8 }}>{ }</Text>
                                        <Down
                                            style={{ marginTop: 5 }}
                                            name='down' color='#fff' size={13}
                                        />
                                    </View>
                                    <Notification
                                        name='notifications' color='#fff' size={22}
                                    />
                                </View>
                                <View style={styles.Image}>
                                    <Image width={200} height={200} source={{ uri: `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png` }} />
                                </View>

                                <View style={styles.container}>
                                    <Text style={{ color: '#fff', marginVertical: 10, fontSize: 18, fontWeight: '500' }}>Today,{date.getDate()} {months[date.getMonth()]}</Text>
                                    <Text style={{ color: '#fff', fontSize: 70, fontWeight: '500', }}>{weatherData?.list[0]?.main.temp}°</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>{weatherData?.list[0]?.weather[0]?.main}</Text>
                                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                                        <Wind
                                            name='wind' color="#fff" size={20}
                                        />
                                        <Text style={{ color: '#fff', fontSize: 17 }}>Wind</Text>
                                        <Text style={{ color: '#fff', marginLeft: 25, fontSize: 17 }}>|       {weatherData?.list[0].wind.speed}km/h</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                                        <Drop
                                            name='droplet' color="#fff" size={20}
                                        />
                                        <Text style={{ color: '#fff', fontSize: 17 }}>Hum</Text>
                                        <Text style={{ color: '#fff', marginLeft: 25, marginRight: 39, fontSize: 17 }}>|      {weatherData?.list[0].main.humidity} %</Text>
                                    </View>
                                </View>

                                <View style={styles.lastbutton}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Weather' as never, { Data: city, position })}
                                        style={{ flexDirection: 'row' }}>
                                        <Text style={styles.buttontxt}>Forcast report  </Text>
                                        <Down
                                            style={{ alignSelf: 'flex-end' }}
                                            name='up' color='black' size={14}
                                        /></TouchableOpacity>

                                </View>
                            </View>
                        }
                    </>
            }

        </View>
    )
}

export default HomeWeather

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#49a3f3',
    },
    Image: {
        height: 100,
        alignSelf: 'center',
    },
    container: {
        marginTop: 90,
        height: 300,
        marginHorizontal: 20,
        backgroundColor: '#88c4f4',
        borderRadius: 25,
        alignItems: 'center',
        borderWidth: 0.7,
        borderColor: '#fafafa'
    },
    lastbutton: {
        height: 55,
        width: 150,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 100,

    },
    buttontxt: {
        color: 'black',
    },
    Buttonview: {

    },
})