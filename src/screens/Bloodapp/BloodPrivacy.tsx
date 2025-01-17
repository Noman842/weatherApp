import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const BloodPrivacy = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <View
                    style={{ margin: 16 }}
                >
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity
                            style={{ alignSelf: 'center', marginBottom:10,
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Back
                                name='arrowleft' color='black' size={25}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Privacy Policy</Text>
                    </View>


                    <Text style={styles.heading}>1. Personal Information Collection:</Text>
                    <Text style={styles.contex}>A. Types of data collected (e.g., name, age, contact details, blood type, location).</Text>
                    <Text style={styles.contex}>B. Purpose: To facilitate blood donation matching and communication.</Text>

                    <Text style={styles.heading}>2. Data Usage:</Text>
                    <Text style={styles.contex}>A. For connecting donors and recipients.</Text>
                    <Text style={styles.contex}>B.To send notifications, updates, and reminders.</Text>

                    <Text style={styles.heading}>3. Data Sharing:</Text>
                    <Text style={styles.contex}>A. Information shared with authorized medical institutions or recipients only when necessary. </Text>
                    <Text style={styles.contex}>B. No sale or unauthorized sharing of data with third parties.</Text>

                    <Text style={styles.heading}>4. User Rights:</Text>
                    <Text style={styles.contex}>A. Access, update, or delete personal information.</Text>
                    <Text style={styles.contex}>B. Withdraw consent for data usage at any time.</Text>

                    <Text style={styles.heading}>5. Contact Information:</Text>
                    <Text style={styles.contex}>A. Provide an email or support contact for privacy-related queries.
                    </Text>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BloodPrivacy

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
        marginLeft: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
        color: 'black',
    },
    contex: {
        fontSize: 15,
        color: 'black',
        fontWeight: '400',
        marginVertical: 4,
    }
})