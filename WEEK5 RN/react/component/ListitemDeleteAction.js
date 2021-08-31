import React from 'react';
import { View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const ListitemDeleteAction = ({onpress}) =>{
    return(
        <View style={{backgroundColor:colors.primary,justifyContent:"center",alignItems:"center",width:70}}> 
        <MaterialCommunityIcons color='black' size={30} name='trash-can' onPress={onpress}>

        </MaterialCommunityIcons>
        </View>
    )
}
export default ListitemDeleteAction;