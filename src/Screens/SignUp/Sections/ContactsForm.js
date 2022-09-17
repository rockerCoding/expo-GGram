import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

import SideSection from '../../SideSection'

import { styles } from './styles'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Animated from 'react-native-reanimated'

const ContactsForm = () => {

  const background = "blue"

  const [contatos, setContatos] = useState([1, 2, 3, 4])

  const renderItem = ({ item, getIndex, drag, isActive }) => {

    const handleMove = () => {
      console.log(getIndex())
      drag()
    }


    return (
      <Pressable onLongPress={() => handleMove()}
        /* disabled={isActive} */
      >
        <Animated.View style={{ width: 300, height: 100, backgroundColor: 'lightblue' }}>
          <Text>{item}</Text>
        </Animated.View>
      </Pressable>

    )
  }

  return (
    <View style={styles.container} >
      <View style={[styles.innerSection, { backgroundColor: background, justifyContent: 'center', alignItems: 'center' }]}>

        <View style={{ flexDirection: 'row' }}>

        </View>
        <DraggableFlatList
          data={contatos}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          onDragEnd={({data}) => setContatos(data)}
        />



      </View>
      <SideSection initial={background} end='rgba(40, 30, 100, 1)' />
    </View>
  )
}

export default ContactsForm