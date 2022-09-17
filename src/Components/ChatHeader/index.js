import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const ChatHeader = ({ nome, nomeDireita }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.leftContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <IconIonicons name='chevron-back' size={30} color="white" />
        </Pressable>
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.logoText}>{nome ? nome : "Mensagens"}</Text>
      </View>

      <View style={styles.rightContainer}>
        {
          nomeDireita &&
          <Pressable onPress={() => navigation.navigate(nomeDireita)}>
            <IconIonicons name='add' color="white" size={30} />
          </Pressable>
        }
      </View>

    </View>
  )
}

export default ChatHeader