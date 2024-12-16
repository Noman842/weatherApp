import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Intro = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.body}>
            <View style={styles.flex1}></View>
            <Text style={styles.txt}>Find Your Dream House:</Text>
            <Text style={styles.txt}>Browse Our Listings</Text>
            <Text style={styles.txt}>Now</Text>

            <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore </Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('LoginSignup' as never)}
            style={styles.button}>
                <View>
                    <Text style={styles.buttontxt}>Get Started</Text>
                </View></TouchableOpacity>
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    flex1: {
        flex: 0.5,
        backgroundColor: 'lightgray',
        marginHorizontal: 18,
        marginVertical: 25,
        borderRadius: 15,
    },
    txt: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 26,
        textAlign: 'center',
        flex: 0.05
    },
    lorem: {
        marginTop:10,
        color: "gray",
        textAlign: 'center',
        flex: 0.15,
        marginHorizontal: 30
    },
    button: {
        flex: 0.08,
        backgroundColor: 'black',
        marginHorizontal: 18,
        borderRadius: 10,
        justifyContent:'center'
    },
    buttontxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 19,   
    }
})