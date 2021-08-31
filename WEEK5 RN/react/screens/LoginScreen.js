import React, { useState } from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import Button from '../component/Button'
import AppTextInput from '../component/AppTextInput'
import Screen from '../component/Screen'
import colors from '../config/colors'
import { Formik } from 'formik'
import * as yup from 'yup'
import AppText from '../component/AppText'
import AppErrorMessage from '../component/AppErrorMessage'



const LoginScreen = () => {

  const validationSchema  = yup.object().shape({
        email : yup.string().required().email().label('Email'),
        password : yup.string().required().min(4).label('Password')
      });
      

    //const [email,setEmail] = useState('')
    //const [password,setPassword] = useState('')

    // function handilClick(){
    //     console.log('Email:' + ' ' +  email)
    //     console.log('Password:' + ' ' + password)
    // }
    
    return (
        <Screen >
          <Image source={require('../assets/logo-red.png')} 
            style={styles.image} 
            resizeMode='contain'
              />
            <Formik
            initialValues={{email:" ", password:" "}}
            onSubmit={(value)=>console.log(value)}
            validationSchema={validationSchema}
            >
            {({handleSubmit,handleChange,errors,setFieldTouched,touched})=>(
                <>
            <View  style={styles.continer}>
            <AppTextInput 
             autoCapitalize="none"
             autoCorrect={false} 
             keyboardType="email-address"
             placeholder='Email' 
             icon='email' 
             onChangeText = {handleChange('email')}
             textContentType="emailAddress"
             onBlur={(value)=>setFieldTouched(value)}
            />
            {touched.email && <AppErrorMessage error={errors.email}/> }
            </View>
            <View style={styles.continer}>
            <AppTextInput
             autoCapitalize="none"
             autoCorrect={false}  
             placeholder='Password' 
             icon='lock'   
             secureTextEntry={true}
             textContentType="password" 
             onChangeText={handleChange('password')}
             onBlur={(value)=>setFieldTouched(value)}
            />
          {touched.password && <AppErrorMessage error={errors.password}/>} 
            </View>
            <View style={styles.button}>
            <Button title='Login' color='#87cefa' 
             onpress={handleSubmit} 
             />
            </View>
                   </>
                )}
            </Formik>
            </Screen>
    )
}

const styles = StyleSheet.create({
    continer:{
     marginVertical:15,
     //padding:10,
    },
    button:{
        alignItems:"center",
        justifyContent:"center",
        padding:40,
    },
    image:{
     alignItems:"center",
     height:100,
     width:80,
     marginLeft:140,
    },
    
 })

export default LoginScreen
