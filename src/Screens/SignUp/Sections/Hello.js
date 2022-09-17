import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'

import { styles } from './styles'
import SideSection from '../../SideSection'

import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const Hello = () => {

  const background = 'blue'
  const titlePosition = useSharedValue(Dimensions.get("screen").height)
  const titlePosition2 = useSharedValue(Dimensions.get("screen").height * -1)
  const titleStyle = useAnimatedStyle(() => {
    return {
      color: 'white',
      fontSize: 40,
      transform: [

        {
          translateY: withSpring(titlePosition.value, {
            duration: 10000
          })
        }
      ]
    }
  })
  const titleStyle2 = useAnimatedStyle(() => {
    return {
      color: 'white',
      fontSize: 40,
      transform: [
        {
          translateY: withSpring(titlePosition2.value, {
            duration: 10000
          })
        }
      ]
    }
  })


  useEffect(() => {
    titlePosition.value = 0
    titlePosition2.value = 0
  }, [])


  return (
    <View style={styles.container} >
      <View style={[styles.innerSection, { backgroundColor: background, justifyContent: 'center', alignItems: 'center' }]}>

        <View style={{ flexDirection: 'row' }}>
          <Animated.Text style={[titleStyle]}>
            Olá

          </Animated.Text>
          <Animated.Text style={[titleStyle2]}>!</Animated.Text>
        </View>


      </View>
      <SideSection initial={background} end='rgba(40, 30, 100, 1)' />
    </View>
  )
}

export default Hello