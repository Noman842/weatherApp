import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import BookMark from 'react-native-vector-icons/Feather'
import Star from 'react-native-vector-icons/FontAwesome'


const Save = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={{ backgroundColor: '#AFAFAF' }}>
                <View style={styles.header}>
                    <View style={styles.Back}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('home' as never)}
                        >
                            <Back
                                name='chevron-back-outline' color="black" size={22}
                            /></TouchableOpacity>
                    </View>
                    <BookMark

                        name='bookmark' color='black' size={22}
                    />
                </View></View>

            <View style={{ backgroundColor: '#AFAFAF', height: 250 }}></View>

            <View style={styles.boxbody}>
                <View style={styles.boxes}></View>
                <View style={styles.boxes}></View>
                <View style={styles.boxes}></View>
                <View style={styles.boxes}></View>
            </View>

            <Text style={styles.tital}>Modern Armchair</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between' }}>
                <Text style={{ color: '#007DFC', fontSize: 18, fontWeight: '600' }}>$145</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Star
                        name='star' color='#FCD400' size={20}
                    />
                    <Text style={{ color: 'black' }}>4.7</Text></View>
            </View>

          <View style={{flexDirection:'row',marginVertical:22,justifyContent:'space-between',marginHorizontal:18}}>
            <View style={styles.description}><Text style={{color:"white",textAlign:'center'}}>Description</Text></View>
            <Text style={{color:"gray",textAlign:'center',fontWeight:'500'}}>How to use</Text>
            <Text style={{color:"gray",textAlign:'center',fontWeight:'500'}}>Reviews</Text>
          </View>
          <Text style={{color:'black',marginHorizontal:15,fontSize:14}}>Tincidunt dui, faucibus leo ultrices sit integer vitae ultricies proin ut id eu tincidunt diam condimentum massa lacinia tellus...<Text style={{color:'#007DFC'}}>Read more</Text></Text>
       <View style={{marginLeft:15}}>
       <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:15,marginVertical:8}}>Origin: Vietnam</Text>
       <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:15,marginVertical:8}}>Material: Velvet ceiling fabric</Text>
       <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:15,marginVertical:8}}>Color: Black, Gray & White</Text>
       <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:15,marginVertical:8}}>Size: 70x70x100 cm</Text>
       <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:15,marginVertical:8}}>Weight: 2350g</Text>
       </View>

        </View>
    )
}

export default Save

const styles = StyleSheet.create({

    body: {
        flex: 1,
    },
    Back: {
        height: 35,
        width: 35,
        borderRadius: 18,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'space-between',
    },
    boxbody: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        marginTop: 270,
    },
    boxes: {
        height: 70,
        width: 70,
        backgroundColor: '#AFAFAF',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#fff',
        marginLeft: 15
    },
    tital: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 23,
        marginTop: 50,
        marginLeft: 15,
    },
    description:{
        height:28,
        width:100,
        justifyContent:'center',
        backgroundColor:'black',
        borderRadius:5,
    }
})