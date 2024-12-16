import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/Ionicons'
import Edit from 'react-native-vector-icons/MaterialIcons'
import User from 'react-native-vector-icons/AntDesign'

const ProfileFurniture = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{ flexDirection: 'row', marginVertical: 30, marginLeft: 15, alignItems: 'center' }}>
                <View style={styles.back}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('home' as never)}
                    >
                        <Back
                            name='chevron-back-outline' color="black" size={22}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 90 }}><Text style={styles.Account}>Account</Text></View>
            </View>

            <View style={styles.profileView}>
                <View style={styles.Profilepic}></View>

                <View style={styles.Profilenameview}>
                    <Text style={styles.Profilename}>Tony Stark</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.gmail}>tonystark911@gmail.com</Text>

                        <Edit
                            style={{ marginLeft: 50 }}
                            name='edit' color='black' size={18}
                        />
                    </View>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderColor:'lightgray'}}></View>
            <View style={{flexDirection:'row',marginVertical:15,marginLeft:15,}}>
                <User
                name='user' color='black' size={20}
                />
                <Text style={styles.personal}>Personal information</Text>
                </View>
                <View style={{borderBottomWidth:1,borderColor:'lightgray'}}></View>
                <View style={{flexDirection:'row',marginVertical:15,marginLeft:15,}}>
                <Edit
                name='language' color='black' size={20}
                />
                <Text style={styles.personal}>Language</Text>
                </View>
                <View style={{borderBottomWidth:1,borderColor:'lightgray'}}></View>
                <View style={{flexDirection:'row',marginVertical:15,marginLeft:15,}}>
                <Edit
                name='privacy-tip' color='black' size={20}
                />
                <Text style={styles.personal}>Privacy Policy</Text>
                </View>
                <View style={{borderBottomWidth:1,borderColor:'lightgray'}}></View>
                <View style={{flexDirection:'row',marginVertical:15,marginLeft:15,}}>
                <Edit
                name='help-outline' color='black' size={20}
                />
                <Text style={styles.personal}>Help Center</Text>
                </View>
                <View style={{borderBottomWidth:1,borderColor:'lightgray'}}></View>

                <View style={{flexDirection:'row',marginVertical:15,marginLeft:15}}>
                <User
                name='setting' color='black' size={20}
                />
                <Text style={styles.personal}>Setting</Text>
                </View>
                <View style={{borderBottomWidth:1,borderColor:'lightgray'}}></View>
                <View style={{flexDirection:'row',marginVertical:15,marginLeft:15,}}>
                <Edit
                name='logout' color='red' size={20}
                />
                <Text style={styles.logout}>Log out</Text>
                </View>
        </View>
    )
}

export default ProfileFurniture

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    back: {
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Account: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    profileView: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom:15,

    },
    Profilepic: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'lightgray'
    },
    Profilenameview: {
        marginLeft: 10,
    },
    Profilename: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    gmail: {
        color: 'gray'
    },
    personal:{
        color:'black',
        fontSize:14,
        fontWeight:'600',
        marginLeft:7,
        fontFamily:'Poppins-Regular'
    },
    logout:{
        color:'red',
        fontSize:14,
        fontWeight:'600',
        marginLeft:7,
        fontFamily:'Poppins-Regular'
    }


})