import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Menu, Divider } from 'react-native-paper';


import { styles } from './styles'

import Destaque from '../Destaque'
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

import Usuario from '../../Services/Usuario'

const Post = ({ post }) => {

  const [nome, setNome] = useState("")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    Usuario.buscaNomeDeUsuarioById(post.idUsuario, setNome)
  }, [])

  return (
    <View style={[styles.container]}>

      <View style={styles.topContainer}>

        <View style={styles.userPostContainer}>
          <Destaque size="p" />
          <View style={styles.userLocationContainer}>
            <Text style={styles.userPostNameText}>{nome}</Text>
            {post.localizacao && <Text style={styles.locationText}>{post.localizacao}</Text>}
          </View>

        </View>
        <Pressable style={styles.optionUserPostContainer}>
          <Menu
            
            visible={visible}
            onDismiss={() =>setVisible(false)}
            anchor={
              <Pressable onPress={() => setVisible(true)}>
                <IconMaterialCommunity name="dots-vertical" size={25} color="white" />
              </Pressable>
            }>
            <Menu.Item onPress={() => { }} title="Item 1" />
            
          </Menu>
          
        </Pressable>

      </View>

      <View style={styles.middleContainer}>


      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.toolsPostContainer}>
          <View style={styles.leftToolsContainer}>
            <IconIonicons name='happy-outline' color="white" size={25} />
          </View>
          <View style={styles.rightToolsContainer}>
            <IconEvilIcons name='star' color="white" size={25} />
          </View>

        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{nome} </Text>
            <Text style={{ fontWeight: '200' }}> {post.descricao}</Text>
          </Text>
        </View>
        {
          post?.comments &&
          <View style={styles.commentsContainer}>

          </View>
        }
      </View>

    </View>

  )
}

export default Post