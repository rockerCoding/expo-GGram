import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles'
import ListaContatos from '../../../Components/ListaContatos'

import EntypoIcon from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import SideSection from '../../SideSection';

const ContactSection = ({contatos}) => {

  const [more, setMore] = useState(false)
  const [errorContatoSize, setErrorContatoSize] = useState(false)

  const moreContact = () => {
    if(contatos.length < 6) setMore(!more)
    else {
      setErrorContatoSize(true)
      setTimeout(() => {
        setErrorContatoSize(false)
      }, 4000);
    }
  }

  return (
    <View style={styles.section}>
      <View style={[styles.innerSection, { backgroundColor: '#FF7F50' }]}>
        <Text style={styles.title}>Contatos</Text>
        <ListaContatos
          contatos={contatos}
          more={more}
        />
        {
          errorContatoSize && 
            <View style={styles.textAlertContainer}>
              <Text style={styles.textAlert}>Você atingiu o número máximo de contatos permitidos</Text>
            </View>
        }
        <Pressable onPress={() => moreContact()}
          style={styles.buttonMoreContainer}
        >
          
          <IconFeather name="plus" color="white" size={50} />
        </Pressable>
      </View>
      <SideSection initial='red' end='green' />
      
    </View>
  )
}

export default ContactSection