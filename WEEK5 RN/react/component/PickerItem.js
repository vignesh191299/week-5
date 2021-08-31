import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import AppText from '../component/AppText'

const PickerItem = ({onpress,lable}) => {
    return (
        <TouchableOpacity style={styles.continer} onPress={onpress}>
            <AppText>{lable}</AppText>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    continer:{
        padding:10,
    },
})


export default PickerItem
