import { View, Text, Dimensions } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

const SideSection = ({ initial, end }) => {
  return (
    <LinearGradient
      style={styles.sideSectionContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 100, y: 0 }}
      colors={[initial, end]}>
    </LinearGradient>
  )
}

export default SideSection