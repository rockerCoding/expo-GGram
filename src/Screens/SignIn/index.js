import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { styles } from './styles'
import { AuthContext } from '../../Contexts/AuthContext';
import { RoutesContext } from '../../Contexts/RoutesContext';
import AlertModal from '../../Components/AlertModal'
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {

  const { login, user, isLoading } = useContext(AuthContext)

  const [iduser, setIdUser] = useState("")
  const [pass, setPass] = useState("")

  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState(false)

  const navigation = useNavigation()

  const handleLogin = () => {
    const user = {
      login: iduser,
      pass: pass
    }

    login(user)
  }

  const handleSignUp = () => {
    navigation.navigate("SignUp")
  }

  useEffect(() => {
    setIsVisible(isLoading)
    if (user?.message) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
    }
  }, [isLoading, user])


  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Image
          source={require('../../../assets/imgs/social.gif')}
          style={{ width: Dimensions.get("screen").width, height: 320 }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.erroContainer}>
          <Text style={styles.erroText}>{error ? user?.message : " "}</Text>
        </View>

        <TextInput
          value={iduser}
          onChangeText={(text) => setIdUser(text)}
          mode="outlined"
          label="Insira o login (cpf / email)"

        />
        <TextInput
          value={pass}
          onChangeText={(text) => setPass(text)}
          mode="outlined"
          label="Insira sua senha"
          secureTextEntry
        />


        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLogin()}
        >
          <AntDesignIcon name='check' color="white" size={30} />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => handleSignUp()}
        >
          <AntDesignIcon name='adduser' color="white" size={30} />
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>



      </View>

      <AlertModal modalVisible={isVisible} />

    </View>
  )
}

export default SignIn