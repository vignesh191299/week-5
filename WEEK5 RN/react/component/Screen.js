import React from 'react'
import { SafeAreaView, View,StyleSheet } from 'react-native'
 import constants from 'expo-constants'



const Screen = ({children,style}) => {
    return (
        <SafeAreaView style={[styles.continer,style]}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer:{
      flex:1,
      paddingTop:constants.statusBarHeight,
   
    },
})




export default Screen;

