import React from 'react';
import {Image, StyleSheet, View,Text} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'



export default function ListItem({title,subtitle,image,renderRightActions,renderLeftActions,onpress,IconComponent}) {
  return (
    <Swipeable renderRightActions={renderRightActions}
    renderLeftActions={renderLeftActions} onPress={onpress}>
    <View style={styles.container} >
      {/* <View style={{marginLeft:'4%'}}>{IconComponent}</View> */}
      <View style={styles.listItem}>
      {/* {IconComponent}  */}
      {image ? <Image source={image} resizeMode='cover' style={styles.image} /> : IconComponent}
      {/* <Image source={image} resizeMode='cover' style={styles.image} /> */}
      <View  style={styles.text}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      </View>
      </View>
    </View>
    </Swipeable>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "25%",
    height: "100%",
    borderRadius: 100,
  },
  text: {
    padding: 13,
  },
  listItem: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 30,
  },
});
