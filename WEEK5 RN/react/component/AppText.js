import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import DefaultStyle from '../config/DefaultStyle'

const AppText = ({children,title,style}) => {
    return (
        <View>
            <Text style={[style]} >
                {children}
                {title}
            </Text>
        </View>
    )
}
// const styles = StyleSheet.create({
//     continer:{

//     }
// })


export default AppText
