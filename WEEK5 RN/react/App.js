import React,{useState} from 'react';
import {StyleSheet,  View,TextInput,Text} from 'react-native';
import Cards from './screens/Cards';
import Button from './component/Button';
import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import CardsDetiles from './screens/cardsdetiles';
import MessageScreen from './screens/MessageScreen';
import ListingScreen from './screens/ListingScreen';
import AccountScreen from './screens/AccountScreen';
import Icon from './component/Icon';
import AppTextInput from './component/AppTextInput';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppPicker from './component/AppPicker';
import colors from './config/colors';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ListingEditScreen from './screens/ListingEditScreen';

const Categoryes = [
  {lable:"t-shirt",value:1},
  {lable:"shirt",value:2},
  {lable:"mens-shirt",value:3},
];


export default function App() {

//const [text, setText] = useState( ' ' )
const [category, setCategory] = useState();
  return (
    
    <View style={styles.container}>
       {/* <WelcomeScreen/> */}
       {/* <ViewImageScreen/> */}
       {/* <Button title="LOGIN" /> */}
       {/* <Cards 
      title='Red jecket for sale'
       subtitle='100$'
       image={require('./assets/jacket.jpg')} />
        <Cards 
      title='Couch in great condition'
       subtitle='1000$'
       image={require('./assets/couch.jpg')} />  */}
      {/* <CardsDetiles/>
      {/* <MessageScreen/> */}
      {/* <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      placeholder="Search..."
     onChangeText={(value) => setText(value)} 
    />
    <Text>{text}</Text>  */}
    {/* <ListingScreen/> */}
    {/* <AccountScreen/> */}
    {/* <Icon name='email' color='red'/> */}
    {/* <AppPicker icon='apps' 
    title='Category'
     items={Categoryes}
     selectedItem={category}
     onSelectedItem={(item)=>setCategory(item)}

    /> */}
    {/* <AppTextInput placeholder='search...' icon='magnify' Color='red'
    //  /> */}
      {/* <RegisterScreen/> */}
     {/* <LoginScreen/>  */}
     <ListingEditScreen/>
     
    

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
},
});
