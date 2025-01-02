import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const LikedPostThread = () => {
    const navigation = useNavigation()
    const cartItems = useSelector((state: any) => state.cart.item)
    // console.log('Data aaa rha',cartItems)
    return (
        <View style={styles.body}>
            <View style={{ margin: 16 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Back
                            name='arrowleft' color='#fff' size={23}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Liked</Text>
                </View>
                <ScrollView>
                    {cartItems?.map((item: any) => (
                        console.log('Data aa rha hai', item),
                        <View key={item.id}>
                            <Text style={{ color: '#fff' }}>{item?.post}</Text>
                            <Image
                                style={{ height: 100, width: 100 }}
                                source={{ uri: item?.selectedImage }}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default LikedPostThread

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#101010'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '500'
    }
})