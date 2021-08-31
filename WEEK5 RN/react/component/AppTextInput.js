import React,{useState} from 'react'
import { StyleSheet, Text,  View ,TextInput} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import Icon from '../component/Icon'
import Screen from '../component/Screen'
import AppText from '../component/AppText'

const AppTextInput = ({icon,onChangeText,...otherprops}) => {
    //const [text, setText] = useState( ' ' )
    return (
       <Screen>
        <View style={styles.continer} >
            {icon ? <MaterialCommunityIcons  style={styles.searchIcon} name={icon} size={20} /> : null}
            <TextInput style={styles.text} 
            onChangeText={onChangeText}
             {...otherprops} 
            />
              
        </View>
       </Screen>
   

       
    )
}

const styles = StyleSheet.create({
continer:{
alignItems:"center",
flexDirection:"row",
width:"100%",
height:40,
//borderColor: "gray", 
//borderWidth: 1,
borderRadius:25,
backgroundColor:colors.lightgrey,


},
text:{
 flex:1,
 padding:10,
 alignItems:"center",
 },
 searchIcon:{
marginLeft:10,
 },


})
export default AppTextInput


