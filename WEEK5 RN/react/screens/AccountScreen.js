import React from 'react'
import { View,FlatList,StyleSheet, Text } from 'react-native'
import Icon from '../component/Icon';
import ListItem from '../component/ListItem';
import colors from '../config/colors';
import ListitemSeparator from '../component/ListitemSeparator';


const messages = [
    {
        
        title:'My Listing',
        icon:{
            name:'format-list-bulleted',
            backgroundcolor:colors.primary,
        },
    },
    {
       
        title:'My message',
        icon:{
            name:'email',
            backgroundcolor:colors.secondary,
        },
       
    },
    ];

const AccountScreen = (props) => {
    return(
       <View  style={styles.text}>
          
           <View style={styles.box}>
           <ListItem 
            title='Mosh Hamedani'
            subtitle='5 Listings'
            image={require('../assets/images.jpg')}
             />
           </View>
           <View style={styles.box}>
           
               {/* <View style={styles.card}>
                   <View style={{backgroundColor:'#fc5c65',height:40,
                width:40,borderRadius:50,alignItems:'center',justifyContent:"center",}}>
                 <Icon name='format-list-bulleted' color='white' size={20} />
                 </View>
                 <Text style={{ marginLeft:10,}}>My Listing</Text>
               </View>
               <View style={styles.card}>
               <View style={{backgroundColor:"#4ECDC4",height:40,
                width:40,borderRadius:50,alignItems:"center",justifyContent:"center",}}>
               <Icon name='email' color='white' size={20}/>
               </View>
               <Text style={{ marginLeft:10,}}>My message</Text>
               </View> */}
           <FlatList data={messages} 
            keyExtractor={(messages)=>messages.title}
            ItemSeparatorComponent={ListitemSeparator}
            renderItem={({item})=>(<ListItem
                title={item.title} 
                 IconComponent={
                     <Icon
                     name={item.icon.name}   
                     size={30} 
                     backgroundColor={colors.primary} 
                     color={item.icon.iconcolor} 
                     />
                 }
                 />)}
                 />
              
           </View>
           <View style={styles.box}>
               {/* <View style={styles.card}>
               <View style={{backgroundColor:"#ffe66d",height:40,
                width:40,borderRadius:50,alignItems:"center",justifyContent:"center",}}>
           <Icon name='logout' color='white' size={20}/>
           </View>
               <Text style={{ marginLeft:10,}}> Logout</Text>
               </View> */}
               <ListItem
                title='Logout' 
                IconComponent={<Icon name='logout' 
                color='white' size={30}  
                backgroundColor='orange'  />}/>
              
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    text:{
        flex:1,
        backgroundColor:"#f8f4f4",
        // flex:1,
        // backgroundColor:'#f8f4f4',
        // width:'100%',
        // height:'100%', 
        
    },
    box:{
      backgroundColor:"white",
      padding:10,
      marginVertical:20,
    // backgroundColor:'white',
    //     width:'100%',
    //     height:'15%', 
    //     marginTop:'15%',
      },
      card:{
       flexDirection:'row',
       alignItems:"center",
       marginLeft:20,
       padding:10,
    // width:'100%',
    //   height:'34%',
    //   marginTop:'10%' 
       
       },
     box2:{
        width:'100%',
        height:'60%',
        marginTop:'-15%'  
      },
  })

export default AccountScreen;