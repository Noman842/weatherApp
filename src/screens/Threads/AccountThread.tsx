import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Go from 'react-native-vector-icons/Ionicons'


const AccountThread = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{ margin: 16 }}>
                <View style={{ flexDirection: "row", height: 50 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={23}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10, fontWeight: '500' }}>Account</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>

                    <Text style={styles.text}>Break reminder</Text>
                    <Text style={styles.text}>Political content</Text>
                    <Text style={styles.text}>Media quality</Text>
                    <Text style={styles.text}>Deactivate or delete profile</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={styles.textchild}>Fediverse sharing</Text>
                        <Text style={styles.textchild}>Off</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.text2}>Other account settings</Text>
                            <Go
                                style={{ alignSelf: 'center' }}
                                name='log-out-outline' color='gray' size={20}
                            />
                        </View>
                        <Text style={styles.textchild2}>Some Settings like username and
                            password, aply to both Threads and
                            Instagram and can be managed on Instagram
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Personal information</Text>

                        <Go
                            style={{ alignSelf: 'center' }}
                            name='log-out-outline' color='gray' size={20}
                        />

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Supervision</Text>

                        <Go
                            style={{ alignSelf: 'center' }}
                            name='log-out-outline' color='gray' size={20}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={styles.text}>Security</Text>

                        <Go
                            style={{ alignSelf: 'center' }}
                            name='log-out-outline' color='gray' size={20}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={styles.text}>Account status</Text>

                        <Go
                            style={{ alignSelf: 'center' }}
                            name='log-out-outline' color='gray' size={20}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Download your information</Text>

                        <Go
                            style={{ alignSelf: 'center' }}
                            name='log-out-outline' color='gray' size={20}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Transfer your information</Text>

                        <Go
                            style={{ alignSelf: 'center' }}
                            name='log-out-outline' color='gray' size={20}
                        />

                    </View>

                    <Text style={styles.text}>Website permission</Text>

                </View>
            </View>
        </View>
    )
}

export default AccountThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#101010'
    },
    text: {
        fontSize: 17,
        color: '#fff',
        marginVertical: 13,
    },
    textchild: {
        color: 'gray',
        fontSize: 16,
    },
    line: {
        borderTopWidth: 0.3,
        borderColor: 'gray',
        marginVertical: 9,
    },
    textchild2: {
        color: 'gray',
        fontSize: 15,
        width: 250,
    },
    text2: {
        fontSize: 17,
        color: '#fff',
        marginVertical: 2,
    },
})