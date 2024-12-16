import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput, FlatList, Alert, } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export const practice = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [save, setSave] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        storedobject()
    }, [])

    const add = () => {
        if (name !== '' && number !== '') {
            const saveArray = [...save, { ContactName: name, ContactNumber: number }]
            console.log('Save', save)
            setSave(saveArray as any)
            storeobject(saveArray)
            setName('')
            setNumber('')
            navigation.navigate('ContactList' as never)
        }
        else { Alert.alert('Please fill the require info') }
    }
    const storeobject = async (store: any) => {
        try {
            const jsonvalue = JSON.stringify(store)
            console.log('value', store)
            await AsyncStorage.setItem('CONTACTS', jsonvalue)
            console.log('Your value is stored')
        } catch (error) {
            console.log('Error', error)
        }
    }
    const storedobject = async () => {
        try {
            const jsonvalue = await AsyncStorage.getItem('CONTACTS')
            const storedlist = JSON.parse(jsonvalue as any)
            setSave(storedlist as any)
            console.log('Got stored value ', storedlist)
        } catch (error) {
            console.log('Error', error)
        }
    }
    const deletecontact = async (index: any) => {
        try {
            const filteredArray = save.filter((_, i) => i !== index)
            setSave(filteredArray)
            const jsonvalue = JSON.stringify(filteredArray)
            console.log('value', filteredArray)
            await AsyncStorage.setItem('CONTACTS', jsonvalue)
        } catch (error) {

        }
    }

    const rendersave = ({ item, index }: any) => {
        return (
            <View style={styles.render}>
                <View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.rendertxt1}>
                            {item.ContactName}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.rendertxt2}>
                            {item.ContactNumber}
                        </Text>
                    </View></View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => deletecontact(index)}>
                        <Image style={{ height: 30, width: 30, }} source={require('./images/deleteiconup-Photoroom.png')} />
                    </TouchableOpacity></View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('./images/callicon.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>
                    Add Contacts
                </Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='Enter Name'
                    placeholderTextColor='gray'
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    value={number}
                    onChangeText={setNumber}
                    placeholder='Enter PhoneNumber'
                    placeholderTextColor='gray'
                    keyboardType='number-pad'
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={add}
                >
                    <Text style={styles.buttontxt}>Save Contact</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ marginTop: 30 }}
                data={save}
                renderItem={rendersave}
            />
        </View>
    )
}

export default practice

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    header: {
        height: 60,
        backgroundColor: 'orange',
        justifyContent: 'center'
    },
    headertxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
    },
    input: {
        borderWidth: 1.5,
        borderColor: 'orange',
        borderRadius: 25,
        marginVertical: 10,
        marginHorizontal: 10,
        color: 'black',
        paddingLeft: 15,
    },
    main: {
        justifyContent: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: 'orange',
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        alignItems: 'center',
    },
    buttontxt: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    rendertxt1: {
        fontSize: 15,
        color: 'black',
        marginTop: 8,
    },
    rendertxt2: {
        fontSize: 15,
        color: 'black',
        marginBottom: 10
    },
    render: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 13
    },
})