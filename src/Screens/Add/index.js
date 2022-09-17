import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../Components/Header';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonIcons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

import { styles } from './style'

const Add = () => {

  const navigation = useNavigation();

  const listaChats = [
    {
      idChat: 1,
      idUsuarioConversa: 2,
      
    }
  ]

  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>

        <View style={styles.leftContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <IconIonIcons name="chevron-back" size={30} color="white" />
          </Pressable>
        </View>

        <View style={styles.rightContainer}>
          <Pressable onPress={() => navigation.navigate("Chat")}>
            <IconFeather name='plus' color="white" size={30} />
          </Pressable>
        </View>

      </View>
      <ScrollView>
        {
          listaChats.map((item) => {
            <Text>{item.nome}</Text>
          })
        }
      </ScrollView> */}
    </View>
  )
}

export default Add