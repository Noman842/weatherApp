import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Store from '@react-native-firebase/firestore'
import { useSelector } from 'react-redux'
import { useNavigation, CommonActions } from '@react-navigation/native'


const BloodDonate = ({ route }: any) => {
    const { useredit } = route.params || {}
    const [name, setName] = useState(useredit ? useredit.Name : '')
    const [gender, setGender] = useState(useredit ? useredit.Gender : '')
    const [bloodgrp, setBloodGrp] = useState(useredit ? useredit.BloodGroup : '')
    const [quantity, setQuantity] = useState(useredit ? useredit.BloodQuantity : '')
    const [age, setAge] = useState(useredit ? useredit.Age : '')
    const [number, setNumber] = useState(useredit ? useredit.Number : '+92')
    const [location, setLocation] = useState(useredit ? useredit.Location : '')
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    console.log('Redux data ------', GetUser)
    const navigation = useNavigation()





    const storeToFirebase = () => {
        if (name == '' ||
            gender == '' ||
            bloodgrp == '' ||
            quantity == '' ||
            location == '' ||
            number == ''

        ) {
            Alert.alert('Please fill all required info.')
        } else {
            Store()
                .collection('BloodDonate')
                .add({
                    Name: name,
                    Gender: gender,
                    BloodGroup: bloodgrp,
                    BloodQuantity: quantity,
                    Age: age,
                    Number: number,
                    Location: location,
                    Email: GetUser,
                    createdAt: Store.FieldValue.serverTimestamp()
                })
                .then(
                    () => console.log('Data Stored')
                )
            setName('')
            setGender('')
            setBloodGrp('')
            setQuantity('')
            setAge('')
            setNumber('+92')
            setLocation('')
            Alert.alert('Thanks for Posting')
        }
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.headerview}>
                <View style={styles.circle1}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle3}></View>
                <Text style={styles.titletxt}>Donations</Text>
                <Text style={styles.titletxt2}>One Donation one Life</Text>
            </View>
            <ScrollView>
                <View style={styles.mainview}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        maxLength={10}
                        placeholder='Name'
                        placeholderTextColor='gray'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Gender</Text>
                    <TextInput
                        style={styles.input}
                        value={gender}
                        onChangeText={setGender}
                        maxLength={6}
                        placeholder='Gender'
                        placeholderTextColor='gray'
                    />
                </View>
                <View style={styles.mainview}>
                    <Text style={styles.name}>Blood Group</Text>
                    <TextInput
                        style={styles.input}
                        value={bloodgrp}
                        onChangeText={setBloodGrp}
                        maxLength={3}
                        placeholder='Blood Group'
                        placeholderTextColor='gray'
                    />
                </View>
                <View style={styles.mainview}>
                    <Text style={styles.name}>Quantity</Text>
                    <TextInput
                        style={styles.input}
                        value={quantity}
                        onChangeText={setQuantity}
                        maxLength={6}
                        placeholder='000 ml'
                        placeholderTextColor='gray'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Age</Text>
                    <TextInput
                        style={styles.input}
                        value={age}
                        onChangeText={setAge}
                        maxLength={2}
                        placeholder='15+'
                        placeholderTextColor='gray'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        value={number}
                        onChangeText={setNumber}
                        keyboardType='phone-pad'
                        maxLength={13}
                        placeholder='+92__-_______'
                        placeholderTextColor='gray'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Location</Text>
                    <TextInput
                        style={styles.input}
                        value={location}
                        maxLength={12}
                        onChangeText={setLocation}
                        placeholder='City name'
                        placeholderTextColor='gray'
                    />
                </View>
                {useredit ?
                    <TouchableOpacity
                        disabled={location == '' || quantity == ''}
                        onPress={() => storeToFirebase()}
                        style={styles.Donationbutton}>
                        <Text style={styles.Donationbuttontxt}>Update</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity
                        disabled={location == '' || quantity == ''}
                        onPress={() => storeToFirebase()}
                        style={styles.Donationbutton}>
                        <Text style={styles.Donationbuttontxt}>Donate</Text>
                    </TouchableOpacity>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default BloodDonate

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
        marginLeft: 15,
    },
    titletxt2: {
        color: '#fff',
        fontWeight: '500',
        marginLeft: 15,
    },
    name: {
        color: '#877E7F',
        fontWeight: '500',
        marginBottom: 7,
        marginLeft: 4,
    },
    mainview: {
        margin: '4%'
    },
    input: {
        padding: 10,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'black'
    },
    Donationbutton: {
        width: '90%',
        height: 60,
        borderRadius: 30,
        marginVertical: '4%',
        backgroundColor: '#E8315B',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    Donationbuttontxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },

})