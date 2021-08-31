import React from 'react';
import {Image, StyleSheet, View,Text} from 'react-native';
import ListItem from '../component/ListItem';


export default function CardsDetiles() {
  return (
    
    <View style={styles.text} >
      <View>
      <Image style={styles.box} source={require('../assets/jacket.jpg')} resizeMode='contain'/>
      <View style={styles.continer}>
      <Text style={styles.title}>Red jecket for sale</Text>
      <Text style={styles.subtitle} >100$</Text>
      </View>
      <ListItem 
      title='Mosh Hamedani'
      subtitle='5 Listings'
      image={require('../assets/images.jpg')}
       />
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex:1,
  backgroundColor:"white",
    
},
box:{
height:300,
width:370,
alignItems:"center",
justifyContent:"center",
},
title:{
  fontSize:20,
},
continer:{
  padding:20,
},
subtitle:{
  color:"#4ECDC4",
  fontSize:20,
  },

});
