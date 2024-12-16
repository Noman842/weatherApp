import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Checkout = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{ flexDirection: 'row', height: 70, marginTop: 20, marginLeft: 15 }}>
                <View style={styles.Back}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cart' as never)}
                    >
                        <Back
                            name='chevron-back-outline' color="black" size={22}
                        /></TouchableOpacity>
                </View>
                <Text style={styles.logintxt}>Check out</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.pic1}></View>
                    <View>
                        <Text style={styles.sofa}>Sofa</Text>
                        <Text style={{ color: 'gray' }}>Color:Black</Text>
                        <Text style={{ color: '#007DFC', fontSize: 17 }}>$145</Text>
                    </View></View>
            </View>

            <Text style={styles.info}>Delivery Information</Text>
            <View style={styles.addressbox}>
                <Text style={styles.name}>Name:Tony Stark</Text>
                <Text style={styles.name}>Phone Number:+92318-6864842</Text>
                <Text style={styles.name}>Address:HassanColony street 4/A,RYK</Text>
            </View>

            <Text style={styles.info}>Scheduling</Text>

            <Text style={styles.datetxt}>Pick Date</Text>
            <View style={styles.date}>
                <Text style={{ textAlign: 'center', color: 'lightgray' }}>DD/MM/YYYY</Text>
            </View>
            <View style={styles.line}></View>

            <View style={{ flexDirection: 'row' ,justifyContent:'space-between',marginHorizontal:15,}}>
                <Text style={styles.charges}>Delivery charges (1,2km)</Text>
                <Text style={styles.charges}>$145</Text>
            </View>

            <View style={{ flexDirection: 'row' ,justifyContent:'space-between',marginHorizontal:15,}}>
                <Text style={styles.charges}>Other charges</Text>
                <Text style={styles.charges}>$15</Text>
            </View>
            <View style={{ flexDirection: 'row' ,justifyContent:'space-between',marginHorizontal:15,}}>
                <Text style={styles.charges}>Total</Text>
                <Text style={styles.chargestotal}>$145</Text>
            </View>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    Back: {
        height: 35,
        width: 35,
        borderRadius: 18,
        backgroundColor: 'lightgray',
        justifyContent: "center",
        alignItems: 'center'
    },
    logintxt: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 22,
        marginLeft: 80,
    },
    pic1: {
        height: 90,
        width: 90,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        marginHorizontal: 15,
    },
    sofa: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 18
    },
    info: {
        color: 'black',
        fontWeight: '600',
        fontSize: 17,
        marginLeft: 20,
        marginVertical: 20,
    },
    addressbox: {
        height: 170,
        marginHorizontal: 15,
        borderWidth: 1.5,
        borderColor: 'lightgray',
        backgroundColor: 'transparent',
        borderRadius: 15
    },
    name: {
        color: 'black',
        marginVertical: 10,
        marginLeft: 15,
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
    },
    datetxt: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        marginLeft: 15,
    },
    date: {
        marginLeft: 15,
        height: 36,
        width: 130,
        borderWidth: 1.5,
        borderColor: 'lightgray',
        backgroundColor: 'transparent',
        borderRadius: 10,
        justifyContent: 'center',
    },
    line: {
        marginHorizontal: 15,
        marginVertical: 15,
        borderBottomWidth: 1.5,
        borderColor: 'lightgray'
    },
    charges: {
        color: 'black',
        marginVertical: 5,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    chargestotal: {
        color: '#007DFC',
        marginVertical: 5,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    }
})