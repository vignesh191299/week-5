import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

export default function RegisterButton(props) {
    return (
     <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.box}>{props.title}</Text>
      </View>  
      
);
  }
  
  const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:'center',
  },
    box:{
      color:"white",
       backgroundColor:"#4ECDC4",
       borderRadius:20,
       width:340,
       height:40,
       fontSize: 25,
       textAlign:"center",
       marginBottom:50,
    },
  });