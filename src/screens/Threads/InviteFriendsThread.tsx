import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
//Icons
import Back from 'react-native-vector-icons/AntDesign'
import Insta from 'react-native-vector-icons/AntDesign'
import Instagram from 'react-native-vector-icons/Feather'
import Whatsapp from 'react-native-vector-icons/FontAwesome'
import SMS from 'react-native-vector-icons/MaterialCommunityIcons'
import Email from 'react-native-vector-icons/Feather'
import Share from 'react-native-vector-icons/Feather'




const InviteFriendsThread = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{ margin: 16 }}>
                <View style={{ flexDirection: "row", height: 55 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={23}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10, fontWeight: '500' }}>Follow and invite friends</Text>
                </View>

                <Text style={{ color: '#fff', fontSize: 19, marginVertical: 14 }}>
                    Follow
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Insta
                        name='instagram' color='#fff' size={23}
                    />
                    <Text style={styles.text}>Instagram friends</Text>
                </View>

                <Text style={{ color: '#fff', fontSize: 19, marginVertical: 14 }}>Invite via</Text>

                <View style={{ flexDirection: 'row', marginVertical: 14 }}>
                    <Instagram
                        name='send' color='#fff' size={23}
                    />
                    <Text style={styles.text}>Instagram</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 14 }}>
                    <Whatsapp
                        name='whatsapp' color='#fff' size={23}
                    />
                    <Text style={styles.text}>WhatsApp</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 14 }}>
                    <SMS
                        name='message-processing-outline' color='#fff' size={23}
                    />
                    <Text style={styles.text}>SMS</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 14 }}>
                    <Email
                        name='mail' color='#fff' size={23}
                    />
                    <Text style={styles.text}>Email</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 14 }}>
                    <Share
                        name='share' color='#fff' size={23}
                    />
                    <Text style={styles.text}>Share my profile</Text>
                </View>

            </View>
        </View>
    )
}

export default InviteFriendsThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010'
    },
    text: {
        color: '#fff',
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '400'
    },
})