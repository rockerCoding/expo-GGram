import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles.js'

const FormSignUp = () => {

  
  const [descricao, setDescricao] = useState("")
  const scroll = useRef(null)
  const [widthItem, setWidthItem] = useState(null)
  const [indexOf, setIndexOf] = useState(0)

  const [nome, setNome] = useState("")
  const parte1 = () => { 
  
    return (
    <View style={styles.scrollItemContainer}>
      <Text>Dados Pessoais</Text>
      <TextInput
        label="Insira o nome do usuario"
        mode='outlined'
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        label="Insira uma descricao"
        mode='outlined'
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
    </View>
  )}

  const parte2 = () => {

  
    return (
    <View style={[styles.scrollItemContainer]}>
      <Text>b</Text>
    </View>
  )}

  const listas = [parte1, parte2]

  const moveTo = (value) => {
    var to = indexOf + value;
    setIndexOf(to)
  }

  useEffect(() => {
    scroll.current.scrollTo({
      x: indexOf * widthItem,
      y: 0,
      animated: true
    })
  }, [indexOf])

  useEffect(() => {

  }, [])


  return (
    <View style={styles.container}>
    
      <View style={styles.laterais}>
        {
          indexOf > 0 &&
          <Pressable onPress={() => moveTo(-1)}>
            <IconFontAwesome name='angle-left' size={30} color="grey" />
          </Pressable>
        }
      </View>

      <ScrollView
        horizontal
        ref={scroll}
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContainer}
        onLayout={(e) => {
          setWidthItem(e.nativeEvent.layout.width)
        }}
      >
        {
          listas.map((Item, index) => <Item key={index} />)
        }
      </ScrollView>

      <View style={styles.laterais}>
        {
          indexOf < listas.length - 1 &&
          <Pressable onPress={() => moveTo(1)}>
            <IconFontAwesome name='angle-right' size={30} color="grey" />
          </Pressable>
        }

      </View>
    </View>
  );
}

export default FormSignUp;