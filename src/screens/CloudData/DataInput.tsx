import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Store from '@react-native-firebase/firestore'


const DataInput = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')



    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const usersData = await Store().collection('users').where('age', '>=', 18).get();
        console.log('Users Data ==>', usersData)
    }


    const storeToFirebase = () => {
        if(name=='' && age==''){
            Alert.alert('Please Enter require info.')
        }
        Store()
            .collection('users')
            .add({
                name: name,
                age: age,
            })
            .then(
                () => console.log('Data Stored')
            )
            setName('')
            setAge('')
    }
    return (
        <View style={styles.body}>
            <View style={styles.NameView}>
                <Text style={styles.name}>Enter Name:</Text>
                <TextInput
                value={name}
                onChangeText={setName}
                    style={styles.nameinput}
                    placeholder='Name'
                    placeholderTextColor='gray'
                />
            </View>

            <View style={styles.NameView}>
                <Text style={styles.name}>Enter Age:</Text>
                <TextInput
                value={age}
                onChangeText={setAge}
                    style={styles.nameinput}
                    placeholder='Age'
                    placeholderTextColor='gray'
                />
            </View>

            <TouchableOpacity
            disabled={name == 0 || age == 0}
            onPress={()=>storeToFirebase()}
                style={styles.button}
            >
                <Text style={styles.buttontxt}>Save Data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DataInput

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        flex: 1,
    },
    name: {
        color: 'black'
    },
    NameView: {
        marginHorizontal: 20,
        top: 100,
        marginVertical: 20,
    },
    nameinput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 10,
        color: 'black'
    },
    button: {
        top: 120,
        height: 40,
        width: 90,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center'

    },
    buttontxt: {
        textAlign: 'center',
        color: 'black'
    }
})