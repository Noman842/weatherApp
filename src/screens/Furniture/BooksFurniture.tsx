import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Stars from 'react-native-vector-icons/FontAwesome'
import InputText from '../../components/InputText'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const BooksFurniture = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.body}>
            <View style={styles.head}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search here'
                    placeholderTextColor='gray'
                />
                <View style={styles.cartIcon}>
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Cart' as never)}
                    >
                    <Icon
                        style={{ alignSelf: 'center' }}
                        name='shoppingcart' color='black' size={20}
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 25, }}>
                <View style={styles.suggestion1}><Text style={styles.suggestiontxt}>Arm Chair</Text></View>
                <View style={styles.suggestion2}><Text style={styles.suggestiontxt2}>Bed</Text></View>
                <View style={styles.suggestion2}><Text style={styles.suggestiontxt2}>Table</Text></View>
                <View style={styles.suggestion4}><Text style={styles.suggestiontxt2}>Wardrobe</Text></View>
            </View>
            <View style={styles.container1}></View>

            <View style={styles.details}>
                <Text style={styles.items}>113 products</Text>
                <Text style={styles.popular}>Most popular<Icon
                    name='down' color='black' size={15}
                /></Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                <View style={styles.products}></View>
                <View style={styles.products}></View>
            </View>
            <View style={styles.starview1}>
                <View style={styles.starview}>

                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star-o' color='#FCD400' size={20}
                    />
                </View>
                <View style={styles.starview}>
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star' color='#FCD400' size={20}
                    />
                    <Stars
                        style={{ alignSelf: 'center' }}
                        name='star-o' color='#FCD400' size={20}
                    />
                </View>
            </View>

            <View style={{flexDirection:'row'}} >
                <View>
                    <Text style={styles.Armchair}>Modren Armchair</Text>
                    <Text style={styles.Armchairprice}>$145</Text>
                </View>

                <View>
                    <Text style={styles.Armchair2}>Modren Armchair</Text>
                    <Text style={styles.Armchairprice2}>$145</Text>
                </View>
            </View>

            <View style={{flexDirection:'row'}} >
                <View>
                   
                </View>
            </View>
        </View>
    )
}

export default BooksFurniture

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        marginHorizontal: 15,


    },
    searchInput: {
        height: 35,
        width: 270,
        color: 'black',
        backgroundColor: '#ededed',
        borderRadius: 9,
        paddingLeft: 10,
        fontSize: 12,
    },
    cartIcon: {
        height: 35,
        width: 35,
        borderRadius: 18,
        backgroundColor: '#ededed',
        justifyContent: 'center'
    },
    suggestion1: {
        height: 25,
        width: 90,
        backgroundColor: 'black',
        borderRadius: 5,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    suggestion2: {
        height: 25,
        width: 65,
        backgroundColor: '#ededed',
        borderRadius: 5,
        marginLeft: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    suggestion4: {
        height: 25,
        width: 75,
        backgroundColor: '#ededed',
        borderRadius: 5,
        marginLeft: 13,
        alignItems: 'flex-start',
        paddingLeft: 7,
        justifyContent: 'center',
    },
    suggestiontxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: 'white'
    },
    suggestiontxt2: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: 'gray',
    },
    container1: {
        height: 200,
        backgroundColor: 'lightgray',
        marginHorizontal: 20,
        borderRadius: 20
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 30
    },
    items: {
        fontFamily: 'Poppins-Regular',
        color: 'gray',


    },
    popular: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
    },
    products: {
        height: 200,
        width: 150,
        backgroundColor: 'lightgray',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    starview1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 40,
    },
    starview: {
        flexDirection: 'row',
        marginTop: 15,
    },
    Armchair:{
        color:'black',
        marginLeft:20,
        fontFamily: 'Poppins-Regular',
        fontSize:15,
    },
    Armchair2:{
        color:'black',
        marginLeft:45,
        fontFamily: 'Poppins-Regular',
        fontSize:15,
    },
    Armchairprice:{
        color:'#07bfed',
        marginLeft:20,
        fontFamily: 'Poppins-Regular',
        fontSize:15,
    },
    Armchairprice2:{
        color:'#07bfed',
        marginLeft:45,
        fontFamily: 'Poppins-Regular',
        fontSize:15,
    },
})