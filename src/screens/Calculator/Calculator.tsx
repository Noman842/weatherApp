import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const Calculator = () => {
    const [value, setValue] = useState<any>(0)
    const [theme, setTheme] = useState('light')
    return (
        <SafeAreaView style={styles.body}>
            {/* <Switch
                value={theme === 'light'}
                onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            /> */}
            <View style={styles.inputview}>
                <View style={styles.top}>
                    <Text style={styles.toptxt}>Smart Calculator</Text>
                </View>
              
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.operator}>
                    <Text style={styles.numberstxt}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operator}>
                    <Text style={styles.numberstxt}>Del</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operator}>
                    <Text style={styles.numberstxt}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operator}>
                    <Text style={styles.numberstxt}>÷</Text>
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>7</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>8</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>9</Text></TouchableOpacity>
                <TouchableOpacity style={styles.operator}><Text style={styles.numberstxt}>×</Text></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>4</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>5</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>6</Text></TouchableOpacity>
                <TouchableOpacity style={styles.operator}><Text style={styles.numberstxt}>-</Text></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.operator}><Text style={styles.numberstxt}>+</Text></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.zero}><Text style={styles.numberstxt}>0</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numbers}><Text style={styles.numberstxt}>•</Text></TouchableOpacity>
                <TouchableOpacity style={styles.operator}><Text style={styles.numberstxt}>=</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Calculator

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#b6e1e6',
    },
    top: {
        backgroundColor: 'rgba(78, 191, 225, 0.63)',
        height: 45,
        width: '100%',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        justifyContent: 'center'
    },
    toptxt: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: '500'
    },
    inputview: {
        height: '43%',
        width: '100%',
        backgroundColor: '#CBCBCB80',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    numbers: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: '#3B7994',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '3%'
    },
    operator: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: '#E19348',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '2%',
        marginHorizontal: '3%'
    },
    numberstxt: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff'
    },
    zero: {
        height: 70,
        width: 150,
        borderRadius: 50,
        backgroundColor: '#3B7994',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '3%'
    }
})