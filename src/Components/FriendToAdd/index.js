import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Destaque from '../Destaque'
import Usuario from '../../Services/Usuario'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const FriendToAdd = ({ user }) => {

  const [nome, setNome] = useState("")

  useEffect(() => {
    Usuario.buscaNomeDeUsuarioById(user.id, setNome)
  }, [])
  

  return (
    <TouchableOpacity style={styles.container}>
      <Pressable style={styles.closeContainer}>
        <IconEvilIcons name="close" size={20} color="rgba(255, 255, 255, 0.8)" />
      </Pressable>
      
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Destaque size="l" />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.buttomText}>{nome}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Text style={styles.buttomText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default FriendToAdd