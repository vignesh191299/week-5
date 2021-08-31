import React from 'react'
import { StyleSheet,View,Platform, Image, SafeAreaView } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ViewImageScreen() {
    return (
        
        <View style={styles.container}>
            <SafeAreaView style={{flex:0.50,justifyContent:'space-between',flexDirection:'row',padding:17}}> 
                <View style={{flex:0.15}}>
                     <MaterialCommunityIcons name='close' size={30} color='white'/>
                </View>
                <View style={{flex:0.15}}>
                <MaterialCommunityIcons name='trash-can-outline' size={30} color='white'/>
                </View>
               
            </SafeAreaView>
            <Image source={require('../assets/chair.jpg')} style={{width:'100%',height:'80%'}} resizeMode='contain'></Image>
            
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        paddingTop:Platform.OS==='android'?30:0
    }
})