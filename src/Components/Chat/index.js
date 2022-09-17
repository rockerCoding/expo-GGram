import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import Usuario from '../../Services/Usuario'
import Mensagem from '../../Services/Mensagem'
import { styles } from './styles'
import Destaque from '../../Components/Destaque'
import IconEntypo from 'react-native-vector-icons/Entypo';
import { AuthContext } from '../../Contexts/AuthContext'
import { ConversaContext } from '../../Contexts/ConversaContext'

const Chat = ({ content }) => {

  const [nome, setNome] = useState("")
  const { user } = useContext(AuthContext)
  const { activeChat, setActiveChat } = useContext(ConversaContext)
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    Usuario.buscaNomeDeUsuarioById(user.id == content.idPessoaA ? content.idPessoaB : content.idPessoaA, setNome)
    console.log(content)
  }, [])

  const entrarChat = () => {
    setActiveChat(content)
    navigation.navigate("Conversa")
  }

  const openMenu = () => {
    setVisible(true)
  }

  const closeMenu = () => {
    setVisible(false)
  }

  const apagarConversa = () => {
    Mensagem.apagaConversa(content.idConversa)
  }
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => entrarChat()}
    >
      <View style={styles.leftContainer}>
        <Destaque size="m" />
        <Text style={styles.text}>{nome}</Text>
      </View>

      <TouchableOpacity onPress={() => openMenu()}>
        
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconEntypo name='dots-three-vertical' size={20} color="white" />}>
          <Menu.Item onPress={() => apagarConversa()} title="Apagar conversa" />
          <Menu.Item >
            <View>
            <Text>Teste</Text>
            </View>
          </Menu.Item>
          
          <Divider />
          
        </Menu>
      </TouchableOpacity>

    </TouchableOpacity>
  )
}

export default Chat