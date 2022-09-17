import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Destaque from '../../Components/Destaque'

const Destaques = () => {

  const listaDestaques = [
    {

    },
    {

    }
  ]

  return (
    <FlatList 
      horizontal
      data={listaDestaques}
      renderItem={({destaque}) => <Destaque destaque={destaque} size="l"/>}
      style={styles.container}
    />

      

      
    
  )
}

export default Destaques