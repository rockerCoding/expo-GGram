import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';

import Destaques from '../Destaques';
import Post from '../../Components/Post';
import api from '../../Services/api';
import { RoutesContext } from '../../Contexts/RoutesContext';
import AddFriendsView from '../../Components/AddFriendsView';
import Usuario from '../../models/Usuario';

const Home = () => {

  const { user, logout, setUser } = useContext(AuthContext);
  const { routes } = useContext(RoutesContext)

  const navigation = useNavigation();

  const [listaAmigos, setListaAmigos] = useState(null)
  const [listaPosts, setListaPosts] = useState(null)

  const buscaPostsDeAmigosById = async (listaIdsAmigos) => {
    await api.post(routes.buscaPostsDeAmigosByIds, listaIdsAmigos).then((res) => {
      console.log(res.data)
      setListaPosts(res.data)
    })
  }

  const buscaListaAmigos = async () => {
    await api.get(routes.buscaAmigosById + user.id, user).then((res) => {
      const listaIdsAmigos = res.data.map((item) => {
        return item.idamigo;
      })
      buscaPostsDeAmigosById(listaIdsAmigos)
    })
  }

  useEffect(() => {
    buscaListaAmigos();
    
  }, [])
  

  return (
    <View style={{ flex: 1 , backgroundColor: 'black'}}>
      <Header navigation={navigation} />
      
      <FlatList
        data={listaPosts}
        renderItem={({item, index}) => 
          index > 0 ? 
          <>
            <AddFriendsView />
            <Post post={item} /> 
          </>: 
          <>
            <Destaques />
            <Post post={item} />
          </>
          
        }

      />
    </View>

  )
}

export default Home