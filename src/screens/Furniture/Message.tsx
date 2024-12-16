import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import CallIcon from 'react-native-vector-icons/Ionicons'

const Message = () => {
    return (
        <View style={styles.body}>

            <View style={styles.header}>
                <View style={{ marginTop: 25, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row' }}><View style={styles.profile}></View>
                        <View><Text style={styles.profilename}>John wick</Text>
                            <Text style={styles.online}>Online</Text></View>
                    </View>
                </View>
            </View>

            <Text style={{ color: 'black', textAlign: 'center', marginTop: 15 }}>Today</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}><View style={styles.txt1}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Hello!!! I need advice</Text></View>
                <View style={styles.user1}></View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.user2}></View>
                <View style={styles.txt2}>
                    <Text style={{ color: 'black', paddingLeft: 5, fontSize: 15, fontFamily: 'Poppins-Regular' }}>
                        Hello! Thank you for contacting Glamorous.
                        This is an automated message. Please submit your request.
                        We will try to respond as quickly as possible. Thank you for trusting and choosing our products!
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.txt3}>
                    <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Poppins-Regular', paddingLeft: 8 }}>
                        I want to advise on a lipstick suitable for people with average skin
                    </Text>
                </View>
                <View style={styles.user3}></View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.user4}></View>
                <View style={styles.txt4}>

                    <Text style={{ color: 'black', fontSize: 14, paddingLeft: 8, fontFamily: 'Poppins-Regular' }}>
                        I recommend you try looking into the Mac brand's lipstick line</Text>
                </View></View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}><View style={styles.txtlast}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Oh! Thank u</Text></View>
                <View style={styles.user1}></View>
            </View>

<TextInput
style={styles.input}
placeholder='Type Something'
placeholderTextColor='lightgray'
/>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor:'#fff'
    },
    profile: {
        height: 50,
        width: 50,
        backgroundColor: 'lightgray',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'lightgreen'
    },
    profilename: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 10,
    },
    online: {
        color: 'lightgreen',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 10,
    },

    header: {
        height: 90,
        borderBottomWidth: 1.5,
        borderColor: 'lightgrey',
    },
    user1: {
        alignSelf: 'flex-end',
        marginRight: 10,
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: 'lightgray',
        marginVertical: 15,
    },
    txt1: {
        alignSelf: 'flex-end',
        marginRight: 10,
        height: 40,
        width: 170,
        borderRadius: 20,
        backgroundColor: '#007DFC',
        marginVertical: 15,
        justifyContent: 'center',
        borderBottomEndRadius: 1
    },
    user2: {
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: 'lightgray',
        marginLeft: 10,

    },
    txt2: {
        marginRight: 10,
        height: 170,
        width: 280,
        borderRadius: 25,
        backgroundColor: '#e0e0de',
        marginVertical: 15,
        justifyContent: 'center',
        borderBottomLeftRadius: 1
    },
    txt3: {
        alignSelf: 'flex-end',
        height: 70,
        width: 295,
        borderRadius: 25,
        backgroundColor: '#007DFC',
        marginVertical: 15,
        justifyContent: 'center',
        borderBottomEndRadius: 1,
        marginLeft: 15,

    },
    user3: {
        alignSelf: 'flex-end',
        marginRight: 10,
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: 'lightgray',
        marginVertical: 15,
        marginLeft: 5
    },
    txt4: {
        marginLeft: 5,
        height: 70,
        width: 280,
        borderRadius: 25,
        backgroundColor: '#e0e0de',
        marginVertical: 15,
        justifyContent: 'center',
        borderBottomLeftRadius: 1
    },
    user4: {
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: 'lightgray',
        marginVertical: 15,
        marginLeft: 5
    },
    txtlast: {
        alignSelf: 'flex-end',
        marginRight: 10,
        height: 40,
        width: 130,
        borderRadius: 20,
        backgroundColor: '#007DFC',
        marginVertical: 15,
        justifyContent: 'center',
        borderBottomEndRadius: 1
    },
    input:{
        marginTop:30,
        height:40,
        borderColor:'lightgray',
        paddingLeft:10,
        backgroundColor:'#F5F5F5',
        marginHorizontal:15,
        borderRadius:10,
        color:'black'

    }
})