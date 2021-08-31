import React, { useState} from 'react'
import { FlatList, Text, View } from 'react-native'
import ListItem from '../component/ListItem';
import ListitemDeleteAction from '../component/ListitemDeleteAction';
import ListitemSeparator from '../component/ListitemSeparator';

const initialmessages = [
{
    id:1,
    title:'Mosh Hamedani',
    discription:'5 Listing',
    image:require('../assets/avatar.jpg')
},
// {
//     id:2,
//     title:'title2',
//     discription:'discription2',
//     image:require('../assets/images.jpg')
// }
]

const MessageScreen = () => {

    const [messages, setmessage] = useState(initialmessages)

    function deleteitem(item){
        setmessage(messages.filter((i)=>i.id !== item.id))
    }

    return(
        <FlatList data={messages} 
        keyExtractor={(message)=>message.id.toString()}
        renderItem={({item})=>(<ListItem 
            title={item.title} 
            subtitle={item.discription} 
            image={item.image}  
             renderRightActions = {()=>(<ListitemDeleteAction onpress={()=>deleteitem(item)}></ListitemDeleteAction>)}
             ></ListItem>)}
            ItemSeparatorComponent={ListitemSeparator}
            >
            </FlatList>
    );
}

// const styles = StyleSheet.create({
    
// })

export default MessageScreen;

