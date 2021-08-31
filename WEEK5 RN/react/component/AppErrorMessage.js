import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import AppText from './AppText'

const AppErrorMessage = ({error,visible}) => {
    //if(!visible || !error) return null;
    return (
        <View>
            <AppText style = {styles.text}>{error}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
         marginTop:40,
        color:'red',
      }
})


export default AppErrorMessage
