import React from 'react'
import { FlatList, Text, View,Screen,StyleSheet } from 'react-native'
import ListItem from '../component/ListItem';
import Cards from './Cards';
const messages = [
    {
        id:1,
        title:'Red jecket for sale',
        subtitle:'100$',
        image:require('../assets/jacket.jpg')
    },
    {
        id:2,
        title:'Couch in great condition',
        subtitle:'1000$',
        image:require('../assets/couch.jpg')
    }
    ]
    
function ListingScreen(props)  {
        return(
            <View style={styles.text}>
            <FlatList data={messages} 
            keyExtractor={(messages)=>messages.id.toString()}
            renderItem={({item})=>(<Cards
                title={item.title} 
                subtitle={item.subtitle} 
                image={item.image}  
                 />)}
                 />
         </View>
        );
    }
    
    const styles = StyleSheet.create({
      text:{
        flex:1,
          backgroundColor:"#f8f4f4",
    }  
    })
    
    export default ListingScreen;