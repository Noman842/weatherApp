import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutUs = () => {
    const navigation = useNavigation()
    return (
        <View style={{flex: 1}}>
            <Text>AboutUs</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('DataScreen' as never)}>
                <Text style={{color: "black"}}>Move to Data Screen</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({})