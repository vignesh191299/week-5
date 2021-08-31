import { Platform } from 'react-native'
import colors from './colors'

export default{
    text:{
        color:colors.black,
       fontsize:40,
       fontfamily:Platform.OS === "android" ? "Roboto" : "Avanir",
    },
    colors:colors,
}