import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors';
export default function Button({title,onpress,color}) {

    return (
     <TouchableOpacity
     style={[styles.button, { backgroundColor:color } ]}
     onPress={onpress}
     >
      <Text style={styles.box}>{title}</Text>
      </TouchableOpacity>  
      
);
  }
  
  const styles = StyleSheet.create({
    button: {
      //flex: 1,
      alignItems:"center",
      justifyContent:'center',
      borderRadius:20,
       //padding:0,
       width:340,
       height:40,
      
       fontSize: 25,
       textAlign:"center"
       
  },
    box:{
       fontSize: 20,
        textAlign:"center",
       //marginBottom:150,
    },
  });
  