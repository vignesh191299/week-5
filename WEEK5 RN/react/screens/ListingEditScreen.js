import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import AppPicker from '../component/AppPicker'
import AppTextInput from '../component/AppTextInput'
import Button from '../component/Button'
import Screen from '../component/Screen'
import AppErrorMessage from '../component/AppErrorMessage'
import { Formik } from 'formik'
import * as yup from 'yup'
import colors from '../config/colors'

const Categoryes = [
    {lable:"Table",value:1},
    {lable:"Clothes",value:2},
    {lable:"Camera",value:3},
  ];

const ListingEditScreen = () => {

    const validationSchema  = yup.object().shape({
        title : yup.string().required().min(1).label('Title'),
        //price : yup.number().required().min(1).max(10000).label('Price'),
        price: yup.number()
                  .typeError('Amount must be a number')
                  .required("Please provide plan cost.")
                  .min(0, "Too little")
                  .max(5000, 'Very costly!'),
        Category : yup.string().required().label('Category'),
        description : yup.string().required().label(' Description'),
      });

      const [category, setCategory] = useState();

    return (
        <Screen>
            <Formik
            initialValues={{title:'', price:'', description:'' }}
            onSubmit={(value)=>console.log(value)}
            validationSchema={validationSchema}
            >
            {({handleSubmit,handleChange,errors,setFieldTouched,touched})=>(
                <>
                <View style={styles.continer}>
            <AppTextInput 
            placeholder='Title'
            onChangeText = {handleChange('title')}
            onBlur={(value)=>setFieldTouched(value)}
            />
            {touched.title && <AppErrorMessage error={errors.title}/> }
            </View>
            <View style={styles.continer}>
            <AppTextInput 
            placeholder='Price'
            onChangeText = {handleChange('price')}
            onBlur={(value)=>setFieldTouched(value)}
            />
            {touched.price && <AppErrorMessage error={errors.price}/> }
            </View>
            <View style={styles.continer}>
            <AppPicker 
                title='Category'
                items={Categoryes}
                selectedItem={category}
                onSelectedItem={(item)=>setCategory(item)}
                // onChangeText={handleChange('Category')}
                // onBlur={(value)=>setFieldTouched(value)}
            />
            {touched.Category && <AppErrorMessage error={errors.Category}/> }
            </View>
            <View style={styles.continer}>
            <AppTextInput 
            placeholder='Description'
            onChangeText = {handleChange('description')}
            onBlur={(value)=>setFieldTouched(value)}
            />
            {touched.description && <AppErrorMessage error={errors.description}/> }
            </View>
            <View style={styles.button}>
            <Button
            title='Post' 
            color={colors.primary}
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
        marginVertical:20,
        padding:10,
       },
       button:{
           alignItems:"center",
           justifyContent:"center",
           padding:20,
       },
})


export default ListingEditScreen
