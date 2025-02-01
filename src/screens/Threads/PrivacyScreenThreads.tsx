import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Private from 'react-native-vector-icons/Feather'
import Back from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Feather'
import Profile from 'react-native-vector-icons/Feather'
import Mute from 'react-native-vector-icons/Ionicons'
import Hide from 'react-native-vector-icons/Ionicons'
import Users from 'react-native-vector-icons/Feather'
import Suggestion from 'react-native-vector-icons/MaterialCommunityIcons'
import Blocked from 'react-native-vector-icons/MaterialIcons'
import DisLike from 'react-native-vector-icons/Ionicons'
import Out from 'react-native-vector-icons/MaterialIcons'



const PrivacyScreenThreads = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{ margin: 15 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <TouchableOpacity style={{ alignSelf: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={22}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headertxt}>Privacy</Text>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <Private
                        name='lock' color='#fff' size={22}
                    />
                    <Text style={styles.text}>Private Profile</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <Icon
                        name='at-sign' color='#fff' size={22}
                    />
                    <Text style={styles.text}>Mentions</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <Profile
                        name='user-check' color='#fff' size={22}
                    />
                    <Text style={styles.text}>Online status</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <Mute
                        name='notifications-off-outline' color='#fff' size={22}
                    />
                    <Text style={styles.text}>Muted</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <Hide
                        name='eye-off-outline' color='#fff' size={22}
                    />
                    <Text style={styles.text}>Hidden words</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <Users
                        name='users' color='#fff' size={20}
                    />
                    <Text style={styles.text}>Profiles you follow</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Suggestion
                        name='chart-box-outline' color='#fff' size={23}
                    />
                    <Text style={styles.text}>Suggesting posts on other apps</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={{ marginTop: 10,flexDirection:'row',justifyContent:'space-between',marginRight:13 }}>
                <Text style={styles.text}>Other privacy settings</Text>
                <Out
                    style={{alignSelf:'center'}}
                    name='logout' color='gray' size={18}
                    />
                     </View>
                <Text style={styles.smalltext}>
                    Some settings, like restrict, apply to both Threads
                    and Instagram and can be managed on Instagram.<Text>Learn More</Text>
                </Text>
           
            <View style={{ flexDirection: 'row', marginVertical: 12,marginHorizontal:13,justifyContent:'space-between' }}>
                <View style={{flexDirection:'row'}}>
                    <Blocked
                        name='cancel-presentation' color='#fff' size={22}
                    />
                    <Text style={styles.text}>Blocked profiles</Text>
                    </View>
                    <Out
                    style={{alignSelf:'center'}}
                    name='logout' color='gray' size={18}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 12,marginHorizontal:13,justifyContent:'space-between' }}>
                    <View style={{flexDirection:'row'}}>
                    <DisLike
                        name='heart-dislike-outline' color='#fff' size={22}
                    />
                    <Text style={styles.text}>Hide likes</Text>
                    </View>
                    <Out
                    style={{alignSelf:'center'}}
                    name='logout' color='gray' size={18}
                    />
                </View>
        </View>
    )
}

export default PrivacyScreenThreads

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010'
    },
    headertxt: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 13,
        fontWeight: '500'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 13,
    },
    line: {
        borderTopWidth: 0.4,
        borderColor: 'gray'
    },
    smalltext: {
        width: 280,
        marginLeft: 13,
        marginBottom:10

    },
})