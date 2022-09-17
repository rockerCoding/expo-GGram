import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../Services/api';
import { RoutesContext } from './RoutesContext';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(null)
  const [userToken, setUserToken] = useState("a")
  //const [user, setUser] = useState(null)
  const [user, setUser] = useState({
    id: 1
  })
  const [listaAmigos, setListaAmigos] = useState(null)

  const { routes } = useContext(RoutesContext)

  const login = async (user) => {
    setIsLoading(true);

    await api.post(routes.login, user).then((response) => {
      setTimeout(() => {
        setUser(response.data)
        if(!response.data.message) setUserToken("aaa")
        setIsLoading(false)
      }, 3000);
    });

  }

  const logout = () => {
    setIsLoading(true);
    setUserToken(null)
    AsyncStorage.removeItem('userToken');
    setIsLoading(false)
  }

  const isLoggedIn = async () => {
    setIsLoading(true)
    try {
      let token = await AsyncStorage.getItem('userToken');
      setUserToken(token) 
    } catch (error) {
      console.log("its logged error " + error)
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user, setUser, login, logout, userToken, isLoading,
        listaAmigos, setListaAmigos
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider