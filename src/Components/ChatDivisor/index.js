import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const ChatDivisor = () => {
  return (
    <View style={styles.divisorContainer}>
      <View style={styles.divisor}></View>
    </View>
  )
}

export default ChatDivisor