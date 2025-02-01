import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'


const BloodTerms = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <View style={{ flexDirection: "row", margin: 16 }}>
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Back
                            name='arrowleft' color='black' size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Terms & Conditions</Text>
                </View>

                <View style={{ margin: '5%' }}>
                    <Text style={styles.titletxt}>1. Acceptance of Terms</Text>
                    <Text style={styles.txt}>
                        By registering or using this app, you acknowledge that you have read,
                        understood, and agreed to these Terms and Conditions,
                        as well as our Privacy Policy.
                    </Text>
                    <Text style={styles.titletxt}>2. Eligibility</Text>
                    <Text style={styles.txt}>To use this app, you must:</Text>
                    <Text style={styles.txt}>
                        a. Be at least 15 years old or meet the age of majority in your jurisdiction.</Text>
                    <Text style={styles.txt}>
                        b. Meet the health criteria for blood donation as outlined by [Applicable Health Authority].
                    </Text>
                    <Text style={styles.txt}>
                        c. Provide accurate and truthful information during registration.
                    </Text>

                    <Text style={styles.titletxt}>3. App Purpose
                    </Text>
                    <Text style={styles.txt}>
                    <Text style={{ fontWeight: 'bold' }}>BloodBridge</Text> is designed to connect blood donors with
                        recipients and healthcare organizations. We act solely as a platform to
                        facilitate these connections and do not provide medical advice or services.
                    </Text>

                    <Text style={styles.titletxt}>4. User Responsibilities
                    </Text>
                    <Text style={styles.txt}>By using the app, you agree to:</Text>
                    <Text style={styles.txt}>a. Provide accurate, up-to-date, and complete information.
                    </Text>
                    <Text style={styles.txt}>b. Comply with all local laws and regulations regarding blood donation.
                    </Text>
                    <Text style={styles.txt}>c. Respect the privacy and safety of other users.
                    </Text>

                    <Text style={styles.titletxt}>5. Medical Disclaimer
                    </Text>

                    <Text style={styles.txt}>a.<Text style={{ fontWeight: 'bold' }}> BloodBridge</Text> does not provide medical advice.
                    </Text>
                    <Text style={styles.txt}>b. Always consult a healthcare professional before donating blood.
                    </Text>
                    <Text style={styles.txt}>c. We are not responsible for any health issues arising from blood donation or the use of this app.
                    </Text>

                    <Text style={styles.titletxt}>6. Liability
                    </Text>
                    <Text style={styles.txt}><Text style={{ fontWeight: 'bold' }}>BloodBridge</Text> is not liable for:</Text>
                    <Text style={styles.txt}>a. Any health issues arising from blood donation.
                    </Text>
                    <Text style={styles.txt}>b. Any disputes between donors, recipients, or healthcare organizations.
                    </Text>
                    <Text style={styles.txt}>c. Losses caused by misuse of the app or inaccurate information provided by users.
                    </Text>

                    <Text style={styles.titletxt}>7. Contact Us
                    </Text>
                    <Text style={styles.txt}>If you have questions about these Terms and Conditions, please contact us at:
                    </Text>
                    <Text style={styles.txt}><Text style={{ fontWeight: 'bold' }}>Email:</Text> nomanejaz0334@gmail.com</Text>
                    <Text style={styles.txt}><Text style={{ fontWeight: 'bold' }}>Phone Number:</Text> +923186864842</Text>

                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default BloodTerms

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
    titletxt: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'black',
        marginVertical: '2%'
    }
})