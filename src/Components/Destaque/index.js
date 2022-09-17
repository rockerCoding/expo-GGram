import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Destaque = ({ destaque, size }) => {

  const inStyles = StyleSheet.create({
    destaque: {
      marginLeft: size == "l" ? 10 : size =="m" ? 5 : 0
    },
    image: {
      width: size == "l" ? 50 : size == "m" ? 35 : 25,
      height: size == "l" ? 50 : size == "m" ? 35 : 25,
    }
  })

  return (
    <View style={[styles.destaque, inStyles.destaque]}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../../assets/favicon.png')}
          style={[styles.profileImage, inStyles.image]}
          resizeMode="contain"
        />
      </View>
    </View>
  )
}

export default Destaque