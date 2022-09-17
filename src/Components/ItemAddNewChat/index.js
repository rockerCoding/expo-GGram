import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from './styles'
import Usuario from '../../Services/Usuario'

import Destaque from '../../Components/Destaque'
import { useNavigation } from '@react-navigation/native'
import Mensagem from '../../Services/Mensagem'
import { ConversaContext } from '../../Contexts/ConversaContext'
import { AuthContext } from '../../Contexts/AuthContext'

const ItemAddNewChat = (item) => {

  const navigation = useNavigation()
  const { setActiveChat } = useContext(ConversaContext)
  const { user } = useContext(AuthContext)

  const [nome, setNome] = useState()
  const [idConversa, setIdConversa] = useState()

  useEffect(() => {
    
    Usuario.buscaNomeDeUsuarioById(item.idUsuario, setNome)
  }, [])
  
  const encaminharParaChat = () => {
    const body = {
      idUsuario : user.id,
      idAmigo : item.idUsuario
    }
    Mensagem.buscaConversaByIdUsuario(body, setIdConversa)
  }

  useEffect(() => {
    if(idConversa){
      setActiveChat(idConversa)
      navigation.navigate("Conversa")
    }
    console.log(idConversa)
  }, [idConversa])
  

  return (
    <TouchableOpacity style={styles.container}
      onPress={() => encaminharParaChat()}
    >
      <View style={styles.leftContainer}>
        <Destaque size="m"/>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{nome}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default ItemAddNewChat