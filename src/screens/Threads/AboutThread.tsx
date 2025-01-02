import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/AntDesign'


const AboutThread = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{margin:16}}>
                <View style={{flexDirection:"row",height:55}}>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    >
                    <Back
                    name='arrowleft' color='#fff' size={23} 
                    />
                    </TouchableOpacity>
                    <Text style={{color:'#fff',fontSize:20,marginLeft:10,fontWeight:'500'}}>About</Text>
                </View>

                <Text style={styles.text}>About and profile</Text>
                <Text style={styles.text}>Meta Privacy Policy</Text>
                <Text style={styles.text}>Threads Supplement Privacy Policy</Text>
                <Text style={styles.text}>Meta Terms of Use</Text>
                <Text style={styles.text}>Threads Terms of Use</Text>
                <Text style={styles.text}>Third Party Notices</Text>
                <Text style={styles.text}>App Updates</Text>
            </View>
        </View>
    )
}

export default AboutThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#101010"
    },
    text:{
        fontSize:16,
        color:'#fff',
        marginVertical:11
    }
})