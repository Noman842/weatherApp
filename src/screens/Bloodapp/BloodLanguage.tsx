import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import DropDown from 'react-native-dropdown-picker'


const BloodLanguage = () => {
    const navigation = useNavigation()
    const [isopen, setIsopen] = useState(false)
    const [currentvalue, setCurrentValue] = useState<any>('')


    const items = [
        { label: 'English (US)', value: 'English (US)' },

    ]
    return (
        <SafeAreaView style={styles.body}>

            <View style={{ flexDirection: "row", margin: 16 }}>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.goBack()}
                >
                    <Back
                        name='arrowleft' color='black' size={25}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Language</Text>
            </View>

            <View style={{marginHorizontal:'9%'}}>
                <DropDown
                    style={{ height: 25, borderColor: "gray" }}
                    items={items}
                    open={isopen}
                    setOpen={() => setIsopen(!isopen)}
                    value={currentvalue}
                    setValue={(val) => setCurrentValue(val)}
                    placeholder='English (US)'
                    placeholderStyle={{ color: 'gray', fontSize: 15, }}
                    dropDownDirection='BOTTOM'
                    modalAnimationType='slide'
                    textStyle={{ fontSize: 15 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default BloodLanguage

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
        marginLeft: 10,
    },
})