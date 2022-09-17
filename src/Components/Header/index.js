import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.leftContainer}>
        <Text style={styles.logoText}>GuiGram</Text>
      </View>
      
      {<View style={styles.rightContainer}>
        <Pressable onPress={() => navigation.navigate("AddPost")}>
          <IconMaterialIcons name='add-a-photo' color="white" size={20} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Message")}>
          <IconFontAwesome name='wechat' color="white" size={20} />
        </Pressable>
      </View>}

    </View>
  )
}

export default Header