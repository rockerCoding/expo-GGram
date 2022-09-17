import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Divider } from 'react-native-paper'
import ChatHeader from '../../Components/ChatHeader'
import { styles } from './styles'

import Usuario from '../../Services/Usuario'
import { AuthContext } from '../../Contexts/AuthContext'
import ItemAddNewChat from '../../Components/ItemAddNewChat'
import ChatDivisor from '../../Components/ChatDivisor'

const AddNewChat = () => {

  const [listaAmigos, setListaAmigos] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    Usuario.listaAmigos(user.id, setListaAmigos)
  }, [])

  useEffect(() => {
    console.log(listaAmigos)
  }, [listaAmigos])

  const renderizarItem = (item, index) => {
    return (
      <>
        { index > 0 &&  <ChatDivisor /> }
        <ItemAddNewChat idUsuario={item.idamigo} />
      </>
    )

  }


  return (
    <View style={styles.container}>
      <ChatHeader nome="Criar conversa" />
      <View style={styles.addNewChatContainer}>
        <FlatList
          data={listaAmigos}
          renderItem={({ item, index }) => renderizarItem(item, index)}
        />
      </View>
    </View>
  )
}

export default AddNewChat