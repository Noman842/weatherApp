import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'

const ZonixModal = () => {
    const [modalvisible, setModalvisible] = useState(false)
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalvisible}
        >
            <View style={styles.modalview}>
                <View style={styles.modalview1}>
                    <Text
                    onPress={()=>{setModalvisible(false)}}
                    >
                        Hello World
                    </Text>
                </View>
            </View>

        </Modal>
    )
}

export default ZonixModal

const styles = StyleSheet.create({
    modalview: {
        flex: 1,
        backgroundColor: 'transperant',
        alignItems: 'flex-end',
    },
    modalview1: {
        height: '20%',
        width: '90%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8315B',
        borderRadius: 20,
    }
})