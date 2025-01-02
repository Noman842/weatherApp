import { Alert, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Store from '@react-native-firebase/firestore'


const DataInput = () => {
    const [name, setName] = useState<any>('')
    const [age, setAge] = useState<any>('')
    const [data, setData] = useState('')
    const [hideAge, setHideAge] = useState<any>(true)



    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const usersData = await Store().collection('users').doc('Data').get();
        const Info: any = usersData.data()
        const Info2 = Info.Data
        setData(Info2)
        console.log('Users Data ====>', Info2)
    }

    const DataA = () => {
        const dataArray = [...data, { name: name, age: age, }]
        storeToFirebase(dataArray)
        setData(dataArray as any)
        console.log('Data====>', data)
    }

    const storeToFirebase = (dataArray: any) => {
        Store()
            .collection('users')
            .doc('Data')
            .set({

                Data: dataArray,
            })
            .then(
                () => console.log('Data Stored')
            )
        setName('')
        setAge('')
    }


    const renderlist = ({ item }: any) => {
        return (
            <View style={{ height: 100, }}>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>
                    <View>
                        <Text style={styles.flatlistdata}>Name:</Text>
                        <Text style={styles.flatlistdata}>Age:</Text>
                    </View>
                    <View>
                        <Text style={styles.flatlistdata}>{item.name}</Text>
                        <Text style={styles.flatlistdata}>{item.age}</Text>
                    </View>
                </View>
            </View>
        )
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
                <View style={styles.nameinput}>
                    <TextInput
                    style={{color:'black'}}
                        value={age}
                        onChangeText={setAge}
                        placeholder='Age'
                        placeholderTextColor='gray'
                        secureTextEntry={hideAge}
                    />
                    <TouchableOpacity onPress={() => setHideAge(!hideAge)}>
                        <Text style={{ color: "black" }}>Hide</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity
                disabled={name == 0 || age == 0}
                onPress={() => DataA()}
                style={styles.button}
            >
                <Text style={styles.buttontxt}>Save Data</Text>
            </TouchableOpacity>

            <FlatList
                data={data}
                renderItem={renderlist}
            />
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
        marginVertical: 20,
    },
    nameinput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 10,
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
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
    },
    flatlistdata: {
        color: 'black',
        margin: 7,
        fontSize: 18,
    }

})