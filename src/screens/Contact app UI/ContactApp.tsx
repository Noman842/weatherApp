import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ContactAppScreen = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>Contact</Text>
            </View>

            <View style={styles.main}>
                <TouchableOpacity
                    style={styles.addcontact} >
        
                    <Text style={styles.addcontacttxt}> Add Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addcontact} >

                    <Text style={styles.addcontacttxt}> All Contacts</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContactAppScreen

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
    addcontact: {
        height: 50,
        width: 190,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'orange',
        marginVertical: 20,
        justifyContent: 'center',


    },
    addcontacttxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'

    }
})
