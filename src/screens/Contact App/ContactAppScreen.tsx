import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ContactAppScreen = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getStoredObjectValue()
    }, [])


    const saveConatct = () => {
        if (name !== '' && phoneNumber !== '') {
            const contactArray = [...contacts, { contactName: name, contacNumber: phoneNumber }]
            console.log('Contact List', contactArray)
            storeObjectValue(contactArray)
            setContacts(contactArray as any)
            setName('')
            setPhoneNumber('')
        } else {
            Alert.alert('Please fill required data')
        }
    }

    const storeObjectValue = async (contactList: any) => {
        try {
            const jsonValue = JSON.stringify(contactList)
            console.log('COntact LIst', contactList)
            await AsyncStorage.setItem('CONTACTS', jsonValue)
            console.log('Your value stored')
        } catch (error) {
            console.log('Error', error)
        }
    }

    const getStoredObjectValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('CONTACTS')
            const storedContactList = JSON.parse(jsonValue as any)
            setContacts(storedContactList as any)
            console.log('Got Stored Value', storedContactList)
        } catch (error) {
            console.log('Error', error)
        }
    }

    const renderContacts = ({ item }: any) => {
        return (
            <View style={{ backgroundColor: 'blue', marginVertical: 6, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, paddingHorizontal: 12 }}>
                <Text style={{ color: '#fff' }}>
                    {item.contactName}
                </Text>
                <Text style={{ color: '#fff' }}>
                    {item.contacNumber}
                </Text>
            </View>
        )
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Contact App</Text>
            </View>
            <View style={{ paddingVertical: 12 }}>
                <TextInput
                    style={{ backgroundColor: '#fff', color: '#000' }}
                    value={name}
                    onChangeText={setName}
                    placeholder='Name'
                    placeholderTextColor={'gray'}
                />
            </View>

            <View style={{ paddingVertical: 12 }}>
                <TextInput
                    style={{ backgroundColor: '#fff', color: '#000' }}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder='Phone Number'
                    placeholderTextColor={'grey'}
                    keyboardType='phone-pad'
                />
            </View>


            <TouchableOpacity
                onPress={saveConatct}
                style={{ backgroundColor: 'blue', width: '30%', alignSelf: 'center', paddingVertical: 12 }}
            >
                <Text style={{ textAlign: 'center' }}>Save</Text>
            </TouchableOpacity>

            <FlatList
                data={contacts}
                renderItem={renderContacts}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 24
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
    }
})






