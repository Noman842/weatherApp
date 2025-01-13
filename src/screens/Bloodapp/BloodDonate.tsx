import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Store from '@react-native-firebase/firestore'
import { useSelector } from 'react-redux'
import { useNavigation, CommonActions } from '@react-navigation/native'
import DropDown from 'react-native-dropdown-picker'


const BloodDonate = ({ route }: any) => {
    const { useredit } = route.params || {}
    // if (useredit) {
    //     console.log('value is coming',useredit)
    // }
    const [name, setName] = useState(useredit ? useredit.Name : '')
    const [quantity, setQuantity] = useState(useredit ? useredit.BloodQuantity : '')
    const [age, setAge] = useState(useredit ? useredit.Age : '')
    const [number, setNumber] = useState(useredit ? useredit.Number : '+92')
    const [location, setLocation] = useState(useredit ? useredit.Location : '')
    const GetUser = useSelector((state: any) => state.Blood.UserEmail)
    console.log('Redux data ------', GetUser)
    const [modelvisible, setModelVisible] = useState(false)
    const [isopen, setIsopen] = useState(false)
    const [currentvalue, setCurrentValue] = useState<any>(useredit ? useredit.Gender : '')
    const [bloodtype, setBloodType] = useState(false)
    const [currenttype, setCurrentType] = useState<any>(useredit ? useredit.BloodGroup : '')
    const navigation = useNavigation()
    const [data, setData] = useState<any>('')


    const items = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ]
    const Bloodtypes = [
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },

    ]


    const storeToFirebase = () => {
        Store()
            .collection('BloodDonate')
            .add({
                Name: name,
                Gender: currentvalue,
                BloodGroup: currenttype,
                BloodQuantity: quantity,
                Age: age,
                Number: number,
                Location: location,
                Email: GetUser,
                createdAt: Store.FieldValue.serverTimestamp()
            })
            .then(
                () => console.log('Data Stored')
            )
        setName('')
        setQuantity('')
        setAge('')
        setNumber('+92')
        setLocation('')
        setCurrentValue('')
        setCurrentType('')
    }


    // const GetDatafromfirestore = async () => {
    //     try {
    //         // if (Email) {
    //         const data = await Store()
    //             .collection('BloodDonate')
    //             .where('Email', '==', GetUser)
    //             .orderBy('createdAt', 'desc')
    //             .get()

    //         const threadsArray: any = data.docs.map(item => ({
    //             id: item.id,
    //             ...item.data()
    //         })
    //         )
    //         console.log("Array ===>", threadsArray)
    //         if (threadsArray) {
    //             console.log('my array', threadsArray)
    //             setData(threadsArray)
    //         }

    //         console.log('Data ===>', data)

    //     } catch (error) {
    //         console.log('Err fetching Email from redux-persist', error)
    //     }
    // }

    // useEffect(() => {
    //     GetDatafromfirestore();
    // }, []);

    const updatePost = async (id: any) => {
        setModelVisible(true)
        try {
            await Store()
                .collection('BloodDonate')
                .doc(id)
                .update({
                    Name: name,
                    Gender: currentvalue,
                    BloodGroup: currenttype,
                    BloodQuantity: quantity,
                    Age: age,
                    Number: number,
                    Location: location,

                })
                .then(() => {
                    console.log("Post updated successfuly")
                    navigation.navigate('BloodMyDonations' as never)
                })

        } catch (error) {
            console.log("Error", error)
        }
        setName('')
        setQuantity('')
        setAge('')
        setNumber('+92')
        setLocation('')
        setCurrentValue('')
        setCurrentType('')
    }



    return (
        <SafeAreaView style={styles.body}>

            <View style={styles.headerview}>
                <View style={styles.circle1}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle3}></View>
                <Text style={styles.titletxt}>Donations</Text>
                <Text style={styles.titletxt2}>One Donation one Life</Text>
            </View>

            <ScrollView>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        maxLength={10}
                        placeholder='Name'
                        placeholderTextColor='gray'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Gender</Text>
                    <DropDown
                        style={{ height: 60 }}
                        items={items}
                        open={isopen}
                        setOpen={() => setIsopen(!isopen)}
                        value={currentvalue}
                        setValue={(val) => setCurrentValue(val)}
                        placeholder='Select Gender'
                        placeholderStyle={{ color: 'gray', fontSize: 15, }}
                        dropDownDirection='TOP'
                        modalAnimationType='slide'
                        textStyle={{ fontSize: 17 }}
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Blood Group</Text>
                    <DropDown
                        style={{ height: 60 }}
                        items={Bloodtypes}
                        open={bloodtype}
                        setOpen={() => setBloodType(!bloodtype)}
                        value={currenttype}
                        setValue={(val) => setCurrentType(val)}
                        placeholder='Select Blood Group'
                        placeholderStyle={{ color: 'gray', fontSize: 15 }}
                        modalAnimationType='slide'
                        maxHeight={320}
                        textStyle={{ fontSize: 17 }}
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Quantity</Text>
                    <TextInput
                        style={styles.input}
                        value={quantity}
                        onChangeText={setQuantity}
                        maxLength={6}
                        placeholder='000 ml'
                        placeholderTextColor='gray'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Age</Text>
                    <TextInput
                        style={styles.input}
                        value={age}
                        onChangeText={setAge}
                        maxLength={2}
                        placeholder='Age should be 15+'
                        placeholderTextColor='gray'
                        keyboardType='phone-pad'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        value={number}
                        onChangeText={setNumber}
                        keyboardType='phone-pad'
                        maxLength={13}
                        placeholder='+92__-_______'
                        placeholderTextColor='gray'
                    />
                </View>

                <View style={styles.mainview}>
                    <Text style={styles.name}>Location</Text>
                    <TextInput
                        style={styles.input}
                        value={location}
                        maxLength={12}
                        onChangeText={setLocation}
                        placeholder='City name'
                        placeholderTextColor='gray'
                    />
                </View>


                <Modal
                    visible={modelvisible}
                    animationType='slide'
                    transparent={true}
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: 'transparent',

                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            height: '20%',
                            width: '90%',
                            backgroundColor: '#E8315B',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#E8315B',
                            borderRadius: 20,
                        }}>
                            <View style={styles.modelcircle1}></View>
                            <View style={styles.modelcircle2}></View>
                            <View style={styles.modelcircle3}></View>
                            {useredit ?
                                <Text style={{ color: '#fff', fontSize: 19, fontWeight: '500' }}>
                                    Updated Successfully ✔
                                </Text> :
                                <Text style={{ color: '#fff', fontSize: 19, fontWeight: '500' }}>
                                    Thanks for Donating
                                </Text>
                            }
                            {useredit ? null :
                                <TouchableOpacity
                                    onPress={() => {
                                        setModelVisible(false);
                                    }}
                                >
                                    <Text style={{
                                        color: '#fff',
                                        marginTop: 15,
                                        fontSize: 16,
                                        fontWeight: '500',
                                    }}>Ok</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </Modal>


                {useredit ?
                    <TouchableOpacity
                        disabled={location == '' || quantity == '' ||
                            age <= '15' || number == '' ||
                            name == '' || currenttype == '' || currentvalue == ''}
                        onPress={() => {
                            updatePost(useredit.id);
                        }
                        }
                        style={[styles.Donationbutton,
                        {
                            backgroundColor: location == 0 || name == 0 ||
                                quantity == 0 || age <= 15 || number == 0
                                || currenttype == 0 || currentvalue == 0 ? 'gray' : '#E8315B',
                        }]}>
                        <Text style={styles.Donationbuttontxt}>Update</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity
                        disabled={location == '' || quantity == '' ||
                            age <= '15' || number == '' ||
                            name == ''
                            || currenttype == '' || currentvalue == ''}
                        onPress={() => {
                            storeToFirebase();
                            setModelVisible(true)
                        }}
                        style={[styles.Donationbutton,
                        {
                            backgroundColor: location == 0 || name == 0 ||
                                quantity == 0 || age <= 15 || number == 0
                                || currenttype == 0 || currentvalue == 0 ? 'gray' : '#E8315B'
                        }]}>
                        <Text style={styles.Donationbuttontxt}>Donate</Text>
                    </TouchableOpacity>
                }
            </ScrollView>

        </SafeAreaView>
    )
}

export default BloodDonate

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerview: {
        height: 120,
        backgroundColor: '#E8315B',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    circle1: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#C52147',
    },
    circle2: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    circle3: {
        height: 45,
        width: 45,
        borderRadius: 25,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 50,
        top: 40,
    },
    titletxt: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '600',
        marginLeft: 15,
    },
    titletxt2: {
        color: '#fff',
        fontWeight: '500',
        marginLeft: 15,
    },
    name: {
        color: '#877E7F',
        fontWeight: '500',
        marginBottom: 7,
        marginLeft: 4,
    },
    mainview: {
        margin: '4%'
    },
    input: {
        padding: 10,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'black'
    },
    Donationbutton: {
        width: '90%',
        height: 60,
        borderRadius: 30,
        marginVertical: '4%',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    Donationbuttontxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    modelcircle1: {
        height: 40,
        width: 40,
        borderRadius: 25,
        backgroundColor: '#C52147',
        position: 'absolute',
        left: 0,
        top: 4,
    },
    modelcircle2: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    modelcircle3: {
        height: 35,
        width: 35,
        borderRadius: 25,
        backgroundColor: '#D34B6A',
        position: 'absolute',
        right: 50,
        top: 40,
    }



})