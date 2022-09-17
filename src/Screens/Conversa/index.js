import { View, Text, ScrollView, TextInput, Pressable, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useCallback, useRef, useState } from 'react'
import { styles } from './styles'
import ChatHeader from '../../Components/ChatHeader'
import { ConversaContext } from '../../Contexts/ConversaContext'
import Usuario from '../../Services/Usuario'
import { AuthContext } from '../../Contexts/AuthContext'
import Mensagem from '../../Services/Mensagem'
import MessageBox from '../../Components/MessageBox'

import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Conversa = () => {

  const scrollViewRef = useRef();

  var { activeChat, setActiveChat } = useContext(ConversaContext)
  const { user } = useContext(AuthContext)

  const [nome, setNome] = useState("")
  const [conversa, setConversa] = useState(null)
  const [message, setMessage] = useState("")

  const [idConversaSalva, setIdConversaSalva] = useState(null)

  var listaHasPrevious = []
  var listaHasNext = []

  const inserirMensagem = async (novaMensagem, setIdConversaSalva) => {
    await Mensagem.inserirMensagemConversa(novaMensagem, setIdConversaSalva)
  }

  const enviarMensagem = () => {
    var novaMensagem = {
      idConversa: activeChat.idConversa,
      idUsuarioEnvio: user.id,
      mensagem: message,
      visto: 0
    }
    setConversa([...conversa, novaMensagem])
    inserirMensagem(novaMensagem, setIdConversaSalva)
    setMessage("");
  }


  useEffect(() => {
    Mensagem.buscaMensagensDoChatByIdConversa(activeChat.idConversa, setConversa)
    if (activeChat != null) {
      var idUsuarioChat = user.id == activeChat.idPessoaA ? activeChat.idPessoaB : activeChat.idPessoaA
      setNome(Usuario.buscaNomeDeUsuarioById(idUsuarioChat, setNome))
    }

  }, [activeChat])

  useEffect(() => {
    if (idConversaSalva) {
      Mensagem.buscaMensagensDoChatByIdConversa(activeChat.idConversa, setConversa).then((res) => {
        setIdConversaSalva(null)
      })
    }
  }, [idConversaSalva])


  const verificaAnterior = (item, index) => {
    return item.idUsuarioEnvio == conversa[index + 1]?.idUsuarioEnvio ? true : false
  }
  const verificaProximo = (item, index) => {
    return item.idUsuarioEnvio == conversa[index - 1]?.idUsuarioEnvio ? true : false
  }

  const renderizarMessageBox = (item, index) => {
    if (conversa) {
      var hasPrevious = verificaAnterior(item, index);
      var hasNext = verificaProximo(item, index);
      return <MessageBox key={index} mensagem={item} hasPrevious={hasPrevious} hasNext={hasNext} />
    }
  }

  useEffect(() => {
    if(conversa){
      scrollViewRef.current.scrollToEnd({ animated: true})
    }
  }, [conversa])
  

  return (
    <View style={styles.container}>

      <ChatHeader nome={nome} />
      <FlatList
        data={conversa}
        ref={scrollViewRef}
        renderItem={({ item, index }) => renderizarMessageBox(item, index)}
        contentContainerStyle={styles.chatContainer}
        inverted
      />

      <View style={styles.messageInputContainer}>
        <View style={styles.sendMessageContainer}>
          
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
              value={message}
              onChangeText={(text) => setMessage(text)}
              multiline
            />
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => enviarMensagem()}
            >
              <IconMaterialCommunity name="send" size={20} color="white" />
            </Pressable>
          </View>

        </View>

      </View>

    </View>
  )
}

export default Conversa