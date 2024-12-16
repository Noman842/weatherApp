import { StyleSheet, TouchableOpacity,Text, View } from 'react-native'
import React from 'react'

const Savedata = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                {/* <View style={styles.add}><Text>+</Text></View> */}
                <Text style={styles.headertxt}>Contact</Text>
            </View>

            <View style={styles.main}>
                <View style={styles.view1}>
                    <Text style={styles.info}>Name: Ali Hassan</Text>
                    <Text style={styles.info}>Number: +92303-2904330</Text>
                </View>

                <View style={styles.view2}>
                    <Text style={styles.info}>Name: Umair Maqsood</Text>
                    <Text style={styles.info}>Number: +92315-4989456</Text>
                </View>

                <View style={styles.view3}>
                    <Text style={styles.info}>Name: Danish Ali</Text>
                    <Text style={styles.info}>Number: +92332-6568876</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.home}
            >

                <Text style={styles.hometxt}>Home</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default Savedata

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 0.1,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    // add: {
    //     height: 30,
    //     width: 30,
    //     borderRadius: 15,
    //     backgroundColor: 'yellow',
    //     alignItems: 'flex-end',
    //     justifyContent:'flex-end',
    //     position: 'absolute'

    // },
    headertxt: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 19,
        fontWeight: '700',
    },
    main: {
        flex: 0.9,
        flexDirection: 'column'
    },
    view1: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        marginVertical: 5,
        flex:0.13,
        backgroundColor: '#f0efeb',
        justifyContent: 'space-evenly',
        fontWeight: '600'

    },
    info: {
        color: 'black',
        fontSize: 16,
        paddingLeft: 20,
        fontWeight: '500'
    },
    view2: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        marginVertical: 5,
        flex:0.13,
        backgroundColor: '#f0efeb',
        justifyContent: 'space-evenly',
    },
    view3: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        marginVertical: 5,
        flex:0.13,
        backgroundColor: '#f0efeb',
        justifyContent: 'space-evenly',
    },
    home: {
        height: 50,
        width: 190,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'orange',
        marginVertical: 40,
        justifyContent: 'center',


    },
    hometxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'

    }
})