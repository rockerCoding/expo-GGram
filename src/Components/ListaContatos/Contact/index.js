import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles'

const Contact = ({ refValue, index, remove }) => {
  const [contato, setContato] = useState("")
  const [hasType, setHasType] = useState(null)

  const changingText = (text) => {
    refValue.current[index] = text
    console.log(refValue.current)
    setContato(text)

  }

  const verifyContact = () => {
    var type = null;
    if (contato.includes("@")) type = "email"
    if (contato.includes("facebook")) type = "facebook"
    if (contato.includes("instagram")) type = "instagram"
    if (contato.includes("linkedin")) type = "linkedin"
    setHasType(type);
  }

  const removeContact = (index) => {
    remove(index)
  }

  useEffect(() => {
    verifyContact()
  }, [contato])

  useEffect(() => {
    console.log(hasType)
  }, [hasType])

  return (
    <View style={styles.container}>

      <View style={styles.textAreaInput}>
        {
          hasType ?
            <View style={styles.typeContainer}>
              <IconMaterialCommunityIcons name={hasType} size={25} color="lightgrey" />
            </View> :
            <View style={styles.typeContainer} />
        }
        <TextInput
          style={[styles.textInputNative, , { paddingLeft: hasType ? '15%' : 10 }]}
          value={contato}
          onChangeText={(text) => changingText(text)}
        />
        <Pressable 
          style={[styles.closeInput]} 
          onPress={() => removeContact(index)}
        >
          <IconMaterialCommunityIcons name='close' size={25} color="lightgrey" />
        </Pressable>
      </View>

    </View>
  )
}

export default Contact