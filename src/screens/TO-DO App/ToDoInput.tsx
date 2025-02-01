import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'



const ToDoInput = ({ route }: any) => {
    const { item } = route.params || {}
    const [detail, setDetail] = useState(item ? item.Detail : '')
    const navigation = useNavigation()
    const [title, setTitle] = useState(item ? item.Title : '')
    const [items, setItems] = useState([])

    useEffect(() => {
        GotStoredValue()
    }, [])



    const SaveData = () => {
        if (title !== '' && detail !== '') {
            const Array = [{ Title: title, Detail: detail, }, ...items]
            console.log('Data', Array)
            storeObjectValue(Array)
            setItems(Array as any)
            setTitle('')
            setDetail('')
            navigation.navigate('HomeToDo' as never)
        }
        else {
            Alert.alert('Title or Details cannot be empty')
        }
    }
    const storeObjectValue = async (dataList: any) => {
        try {
            const jsonValue = JSON.stringify(dataList)
            console.log('Contact LIst', dataList)
            await AsyncStorage.setItem('TODOITEMS', jsonValue)
            console.log('Your value stored')
        } catch (error) {
            console.log('Error', error)
        }
    }


    const GotStoredValue = async () => {
        try {
            const Value = await AsyncStorage.getItem('TODOITEMS')
            const StoredData = Value ? JSON.parse(Value as any) : []
            setItems(StoredData as any)
            console.log('GotStoredData', StoredData)
        } catch (error) {
            console.log('Error', error)
        }
    }

    const Update = ()=> {
        const olditems = items as any
        olditems[item.index] = {Title: title, Detail: detail}
        storeObjectValue(olditems)
        navigation.navigate('HomeToDo' as never)
        console.log('Updated Successfully')
    }

    return (
        <SafeAreaView style={styles.body}>

            <View style={styles.header}>
                <View style={styles.headerview}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ alignSelf: 'center' }}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={25}
                        />
                    </TouchableOpacity>
                    {item ?
                        <Text style={styles.headertxt}>Update</Text>
                        :
                        <Text style={styles.headertxt}>Add Task</Text>
                    }
                </View>
            </View>

            <ScrollView>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Title'
                    placeholderTextColor='#9395D3'
                    maxLength={45}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Detail'
                    value={detail}
                    onChangeText={setDetail}
                    placeholderTextColor='#9395D3'
                    multiline={true}
                />
                {item ?
                    <TouchableOpacity
                        onPress={Update}
                        style={styles.button}>
                        <Text style={styles.buttontxt}>Update</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={SaveData}
                        style={styles.button}>
                        <Text style={styles.buttontxt}>Add</Text>
                    </TouchableOpacity>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default ToDoInput

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 100,
        width: '100%',
        backgroundColor: '#9395D3',
        justifyContent: 'center',
    },
    headerview: {
        flexDirection: 'row',
        marginLeft: 16,
    },
    headertxt: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 7,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#8B8787',
        width: '90%',
        marginHorizontal: 16,
        marginTop: '5%',
        color: 'black',
    },

    button: {
        height: 55,
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#9395D3',
        marginTop: 35,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontxt: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500'
    }
})