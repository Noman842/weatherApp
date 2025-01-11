import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Back from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import Store from '@react-native-firebase/firestore'
import Edit from 'react-native-vector-icons/MaterialIcons'



const BloodDetail = ({ route }: any) => {
    const { mydata, data } = route.params
    console.log('Data=====>', data)
    const navigation = useNavigation<any>()
    const [dataa, setData] = useState<any>('')
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    const GetDatafromfirestore = async () => {
        try {
            // if (Email) {
            const data = await Store()
                .collection('BloodDonate')
                .where('Email', '==', GetUser)
                .orderBy('createdAt', 'desc')
                .get()

            const threadsArray: any = data.docs.map(item => ({
                id: item.id,
                ...item.data()
            })
            )
            console.log("Array ===>", threadsArray)
            if (threadsArray) {
                console.log('my array', threadsArray)
                setData(threadsArray)
            }

            console.log('Data ======>', data)

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    useEffect(() => {
        GetDatafromfirestore();
    }, []);

    const deletePost = async (id: any) => {
        try {
            await Store()
                .collection('BloodDonate')
                .doc(id)
                .delete()
            console.log("Post deleted successfuly")
            GetDatafromfirestore()
            navigation.navigate('BloodMyDonations' as never)
        } catch (error) {
            console.log("Error", error)
        }
    }


    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.titleview}>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.goBack()}
                >
                    <Back
                        name='arrowleft' color='black' size={25}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Details</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {mydata ?
                    <TouchableOpacity
                        onPress={() => deletePost(dataa.id)}
                    >
                        <Delete
                            style={{ marginHorizontal: 20 }}
                            name='delete-outline' color='#D9214B' size={23}
                        />
                    </TouchableOpacity> :
                    null
                }
                {mydata ?
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodDonate' as never,
                            { useredit: mydata }
                        )}
                    >
                        <Edit

                            name='edit' color='black' size={18}
                        />
                    </TouchableOpacity> :
                    null
                }
            </View>
            <View style={{ margin: '4%' }}>
                <Text style={styles.name}>Name: {data ? data?.Name : mydata.Name}</Text>
                <View style={styles.line}></View>
                <Text style={styles.name}>Gender: {data ? data?.Gender : mydata.Gender}</Text>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.name}>Blood Group:</Text>
                    <Text style={styles.name1}> {data ? data?.BloodGroup : mydata.BloodGroup}</Text>
                </View>
                <View style={styles.line}></View>
                <Text style={styles.name}>Quantity: {data ? data?.BloodQuantity : mydata.BloodQuantity}</Text>
                <View style={styles.line}></View>
                <Text style={styles.name}>Age: {data ? data?.Age : mydata.Age}</Text>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.name}>Mobile Number:</Text>
                    <Text style={styles.name1}> {data ? data?.Number : mydata.Number}</Text>
                </View>
                <View style={styles.line}></View>
                <Text style={styles.name}>Location: {data ? data?.Location : mydata.Location}</Text>
                <View style={styles.line}></View>


            </View>
        </SafeAreaView>
    )
}

export default BloodDetail

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleview: {
        margin: 15,
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: 'black',
        marginLeft: 10,
        alignSelf: 'center'
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        marginVertical: '3%',
        color: 'black'
    },
    name1: {
        fontSize: 20,
        fontWeight: '500',
        marginVertical: '3%',
        color: '#D9214B',
        alignSelf: 'center',
    },
    line: {
        marginVertical: 7,
        borderTopWidth: .5,
        borderColor: 'gray',
    }
})