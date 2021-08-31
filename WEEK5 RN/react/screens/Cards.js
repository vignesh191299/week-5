import React from 'react';
import {Image, StyleSheet, View,Text} from 'react-native';


export default function Cards({image,title,subtitle}){
  return (
    
    <View style={styles.text} >
      <View style={styles.card}>
      <Image style={styles.box}  source={image} resizeMode='contain'/>
      <View style={styles.continer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  text: {
   flex:1,
  // backgroundColor:"#f8f4f4",
  // borderRadius:15,
  // marginBottom:20,
  // overflow:"hidden",
  //  alignItems:"center",
  //  justifyContent:"center",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  backgroundColor:"#f8f4f4",
},
card:{
  width: "100%",
    height: "80%",
    borderRadius: 30,
    padding:50,
},
box:{
  // height:300,
  // width:300,
  // borderRadius:15,
  width: "100%",
    height: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title:{
    fontSize:20,
  },
  continer:{
    backgroundColor:'white',
    height: "33%",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 15,
  },
  subtitle:{
    color:"#4ECDC4",
    marginTop: 5,
    fontWeight: "bold",
  },
});
