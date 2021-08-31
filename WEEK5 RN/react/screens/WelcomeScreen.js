import React from 'react'
import { ImageBackground, StyleSheet,Image,Text, View} from 'react-native'
import Button from "../component/Button";
import RegisterButton from '../component/botton/RegisterButton';
import colors from "../config/colors";
export default function WelcomeScreen(props) {
    return (
       <View style={styles.container}>
           <ImageBackground 
           blurRadius={3}
           source={require('../assets/background.jpg')} 
           style={styles.box} >
         <Image source={require('../assets/logo-red.png')} 
         style={{flex:0.2,height:100,width:80}} 
         resizeMode='contain'/>
         <Text>Sell What you Don't need</Text>
         </ImageBackground>
        <View >
        <Button title="LOGIN" color={colors.secondary} onpress={()=>console.log('button pressed')} />
            </View>
        <View >
           <Button title="REGISTER" color={colors.secondary}/>
      </View>
       </View> 
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      box: {
        flex:1,
        alignItems:'center',
        paddingTop:'30%',
      },
    
})