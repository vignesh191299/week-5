import React, {useState} from 'react'
import { View, Text, TouchableWithoutFeedback , StyleSheet,Modal, Button, FlatList, TextInput } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppTextInput from './AppTextInput'
import colors from '../config/colors'
import AppText from '../component/AppText'
import DefaultStyle from '../config/DefaultStyle'
import PickerItem from './PickerItem'
import Screen from '../component/Screen'

const AppPicker = ({icon,items,onSelectedItem,selectedItem,title,...otherprops}) => {

        const [modal, setModal] = useState(false)

    return (
       
        <Screen>
        <TouchableWithoutFeedback onPress={()=> setModal(true)}>
        <View style={styles.continer}>
            {icon ? <MaterialCommunityIcons style={styles.icon}  name={icon} size={20}/> : null}
            <AppText style={styles.text} 
             {...otherprops}  
            > 
            { selectedItem ? selectedItem.lable : title}
            </AppText>
         <MaterialCommunityIcons style={styles.searchIcon}   name='chevron-down' size={20} />
        </View >
        

        </TouchableWithoutFeedback>
        {/* <AppTextInput placeholder='search...' icon='magnify'
         /> */}
        <Modal visible={modal} animationType='slide'>
         <Button   title='close' onPress={()=> setModal(false)}/>
         <FlatList data={items}
         keyExtractor={(item)=>item.value.toString()}
         renderItem={({item})=><PickerItem lable={item.lable} onpress={()=> {onSelectedItem(item);
           setModal(false)}}/>}/>
        </Modal>
        
        </Screen>
       
        
    )
}

const styles = StyleSheet.create({
    continer:{
    alignItems:"center",
    flexDirection:"row",
    width:"100%",
    height:40,
    borderColor:colors.lightgrey, 
    borderWidth: 1,
    borderRadius:25,
    backgroundColor:DefaultStyle.colors.lightgrey,
    marginVertical:10,
    
    },
    text:{
     flex:1,
     alignItems:"center",
     justifyContent:"center",
     padding:10,
     },
     searchIcon:{
        marginLeft:240,
     },
     icon:{
         marginLeft:10,
     }
})

export default AppPicker
