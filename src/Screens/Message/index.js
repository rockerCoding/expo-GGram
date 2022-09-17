import { View, Text, Pressable, ScrollView, TextInput, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from '../../Components/ChatHeader';
import { styles } from './styles';

import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import Chat from '../../Components/Chat';
import ChatDivisor from '../../Components/ChatDivisor';
import Mensagem from '../../Services/Mensagem';

import { AuthContext } from '../../Contexts/AuthContext'
import { ConversaContext } from '../../Contexts/ConversaContext';


const Message = () => {

  const { user } = useContext(AuthContext)
  const [listaConversas, setListaConversas] = useState([])
  const { setActiveChat } = useContext(ConversaContext)

  useEffect(() => {
    setActiveChat(null)
    Mensagem.buscaMensagensAtivasDoUsuarioById(user.id, setListaConversas)
  }, [])

  return (
    <View style={styles.container}>
      <ChatHeader nomeDireita="AddNewChat"/>
      <View style={styles.pesquisarContainer}>
        <View style={styles.barraPesquisaContainer}>
          <IconEvilIcons name='search' size={30} color="white" />
          <TextInput style={styles.inputSearch} />
        </View>
      </View>
      
      <FlatList 
        data={listaConversas}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              {index > 0 && <ChatDivisor />}
              <Chat content={item} />
            </View>
          )
        }}
      />
      
      
    </View>
  )
}

export default Message