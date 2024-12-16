import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Contacts = () => {

    const [save, setSave] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        storedobject()
    }, [])



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
                <View style={{justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => deletecontact(index)}>
                        <Icon name="delete" color="orange" size={20} />
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
        <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ marginLeft: 10 }} source={require('./images/Vector.png')} />
                </TouchableOpacity>
                <Text style={styles.headertxt}>All Contacts</Text>
            </View>

            <FlatList
                data={save}
                renderItem={rendersave}
            />
        </View>
    )
}
export default Contacts
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'orange',
        height: 70,
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },
    headertxt: {
        color: 'black',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: '600'
    },
    storeddata: {
        backgroundColor: 'transperant',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 20,
        marginTop: 20,
    },
    storeddatatxt: {
        color: 'black',
        fontSize: 18,
        textAlignVertical: 'center'
    },
    storeddataimage: {
        marginTop: 8,
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