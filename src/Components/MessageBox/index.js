import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from './styles'
import { AuthContext } from '../../Contexts/AuthContext'
import Destaque from '../../Components/Destaque'

const MessageBox = ({ mensagem, hasNext, hasPrevious }) => {

  const { user } = useContext(AuthContext)
  
  const orientacao = mensagem.idUsuarioEnvio == user.id ? 'flex-end' : 'flex-start';
  const orientacaoBoolean = orientacao == 'flex-start' ? true : false;
  const [mes, setMes] = useState("")
  
  useEffect(() => {
    setMes(mensagem.mensagem)
  }, [mensagem])
  
  var topLeft = 0;
  var topRight = 0;
  var bottomRight = 0;
  var bottomLeft = 0;

  if(orientacaoBoolean){
    topRight = bottomRight = 10;
    if(hasPrevious && hasNext){
      bottomLeft = 0;
      topLeft = 0;
    } else if(hasPrevious && !hasNext){
      bottomLeft = 0;
      topLeft = 0
    } else {
      bottomLeft = 0;
      topLeft = 10
    }
  } else {
    topLeft = bottomLeft = 10;
    if(hasPrevious && hasNext){
      topRight = 0
    } else if(hasPrevious && !hasNext){
      topRight = 0
    } else if(!hasPrevious && hasNext){
      topRight = 10
    }
  }

  return (
    <View style={[styles.container, { alignItems: orientacao }]}>
      <View style={[styles.messagemContainer, { justifyContent: orientacao }]}>

        {
          (mensagem.idUsuarioEnvio != user.id) & !hasNext ? 
          <View style={styles.destaqueContainer}>
            <Destaque size="p" />
          </View> :
          <View style={styles.destaqueContainer} />
        }
        <View style={[styles.messageBallonContainer, 
          { 
            borderTopLeftRadius: topLeft,
            borderTopRightRadius: topRight,
            borderBottomRightRadius: bottomRight,
            borderBottomLeftRadius: bottomLeft,
            backgroundColor: orientacaoBoolean ? 'grey' : 'blue'
          }]}>
          <Text style={styles.messageBallonText}>{mes}</Text>
        </View>
      </View>

    </View>
  )
}

export default MessageBox