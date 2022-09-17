import { View, Text, Dimensions } from 'react-native'
import React, { useContext } from 'react'

import AuthStack from '../../Stacks/AuthStack'
import AppStack from '../../Stacks/AppStack'

import { AuthContext } from '../../Contexts/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const OpenView = () => {

  const { userToken } = useContext(AuthContext)

  return (
    <View style={{flex: 1, /* paddingTop: 38 */}}>
      <StatusBar translucent/>
      { userToken ? <AppStack /> : <AuthStack />}
    </View>
  )
}

export default OpenView