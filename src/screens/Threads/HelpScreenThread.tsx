import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Back from 'react-native-vector-icons/AntDesign'


const HelpScreenThread = () => {
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
                    <Text style={{color:'#fff',fontSize:20,marginLeft:10,fontWeight:'500'}}>Help</Text>
                </View>

                <Text style={styles.text}>Report a problem</Text>
                <Text style={styles.text}>Help Center</Text>
                <Text style={styles.text}>Privacy and security help</Text>
                <Text style={styles.text}>Support request</Text>
                <Text style={styles.text}>Fediverse Guide</Text>
           
            </View>
        </View>
    )
}

export default HelpScreenThread

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#101010"
    },
    text:{
        fontSize:16,
        color:'#fff',
        marginVertical:11,
    }
})