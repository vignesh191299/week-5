// import React from 'react'
// import { View } from 'react-native'
// import {MaterialCommunityIcons} from '@expo/vector-icons'

// const Icon = ({color,size,name,backgroundcolor}) => {
//     return(
//         <View style={{
//             width:size,
//             height:size,
//             borderRadius:size/2,
//             //backgroundColor,
//             alignItems:'center',
//             justifyContent:'center',
//         }}>
//         <MaterialCommunityIcons color={color} size={size} name={name} backgroundcolor={backgroundcolor}/>
//       </View>
//     )
// }

// export default Icon;
import React from 'react';
import {View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({name,size,backgroundColor,color='white'}) => {
    
    return (
 <View  style={{ width:55,height:55,borderRadius:50,backgroundColor,justifyContent:'center', alignItems:'center',marginTop:'35%' }}>
<MaterialCommunityIcons  name={name}  
                          backgroundColor={backgroundColor}
                          color={color} 
                          size={size}>
                              
                          </MaterialCommunityIcons>
  </View>

    );
}

export default Icon;