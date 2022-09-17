import { View, Text, TextInput } from 'react-native'
import React, { createRef, useEffect, useRef, useState } from 'react'

import { styles } from './styles'
import SideSection from '../../SideSection'
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'

const UserNameForm = ({ nome, setNome }) => {

  const background = 'rgba(40, 30, 100, 1)';
  const [errorNome, setErrorNome] = useState(true)

  const opacityErrorContainer = useSharedValue(0)
  const opacityErrorContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityErrorContainer.value),
    }
  })

  const verificaUserName = () => {
    
    if(nome.length > 0 && nome.length < 6) {
      return (
        <View style={styles.textAlertContainer}>
          <Text style={[styles.textAlert, opacityErrorContainerStyle]}>Deve possuir mais de 6 caracteres</Text>
        </View>
      )
    }
  }

  useEffect(() => {
    if(errorNome == false) opacityErrorContainer.value = 1
  }, [errorNome])

  return (
    <View style={styles.container}>
      <View style={[styles.innerSection, { backgroundColor: background }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Como iremos te chamar?</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.indicatorText}>Esse será seu nome de usuário</Text>
          <TextInput
            style={styles.textInputNative}
            value={nome}
            onChangeText={(text) => setNome(text)}
            
          />
          <View style={styles.errorContainer}>
            {
              verificaUserName()
            }
          </View>



        </View>

      </View>
      <SideSection initial={background} end="red" />
    </View>
  )
}

export default UserNameForm