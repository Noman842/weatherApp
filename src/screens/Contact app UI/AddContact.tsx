import { StyleSheet, TouchableOpacity,Text, TextInput, View } from 'react-native'
import React from 'react'

const AddContact = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>Contact</Text>
            </View>
            <View style={styles.main}>
                <TextInput
                    style={styles.Username}
                    placeholder='Username'
                    placeholderTextColor={'gray'}
                />
                <TextInput
                    style={styles.Username}
                    placeholder='Phone number'
                    placeholderTextColor={'gray'}
                />
            </View>
            <TouchableOpacity
                    style={styles.addcontact} 
                    >

                    <Text style={styles.addcontacttxt}> All Contacts</Text>
                </TouchableOpacity>
        </View>
    )
}

export default AddContact

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 0.1,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    headertxt: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 19,
        fontWeight: '700',
    },
    main: {
        flex: 0.9,
        justifyContent: 'center',
        flexDirection: 'column'

    },
    Username: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'orange',
        color: 'black',
        paddingLeft: 20,
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    addcontact: {
        height: 50,
        width: 190,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'orange',
        marginVertical: 40,
        justifyContent: 'center',


    },
    addcontacttxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'

    }
})