import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from '../component/Button'
import AppTextInput from '../component/AppTextInput'
import Screen from '../component/Screen'
import colors from '../config/colors'
import { Formik } from 'formik'
import * as yup from 'yup'
import AppText from '../component/AppText'
import AppErrorMessage from '../component/AppErrorMessage'



const RegisterScreen = () => {


    const validationSchema = yup.object().shape({
        name : yup.string().required().min(2).label('Name'),
        email : yup.string().required().email().label('Email'),
        password : yup.string().required().min(4).label('Password')
    })

    // const [name,setName] = useState('')
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')

    // function handilClick(){
    //     console.log('Name:' + ' ' +  name)
    //     console.log('Email:' + ' ' +  email)
    //     console.log('Password:' + ' ' + password)
    // }

    return (
        <Screen>
            <Formik
            initialValues={{name:"",email:"",password:""}}
            onSubmit={(value)=>console.log(value)}
            validationSchema={validationSchema}
            >
            {({handleSubmit,handleChange,errors,touched,setFieldTouched})=>(
                <>
                <View  style={styles.continer}>
            <AppTextInput  
            placeholder='name' 
            icon='account' 
            onChangeText = {handleChange('name')}
            onBlur={(value)=>setFieldTouched(value)}
            />
            {touched && <AppErrorMessage error={errors.name}/>}
            </View>
            <View  style={styles.continer}>
            <AppTextInput  
            placeholder='Email' 
            icon='email'
            onChangeText = {handleChange('email')}
            onBlur={(value)=>setFieldTouched(value)}
              />
             {touched && <AppErrorMessage error={errors.email}/>}
            </View>
            <View style={styles.continer}>
            <AppTextInput  placeholder='Password'
             icon='lock' 
             secureTextEntry
             onChangeText={handleChange('password')}
             onBlur={(value)=>setFieldTouched(value)}
             />
             {touched && <AppErrorMessage error={errors.password}/>}
            </View>
            <View style={styles.button}>
            <Button title='Register' color={colors.primary} 
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
    //marginVertical:15,
   },
   button:{
   alignItems:"center",
   justifyContent:"center",
   padding:30,
   },
})


export default RegisterScreen
