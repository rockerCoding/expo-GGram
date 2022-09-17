import { View, Text, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { PhotoContext } from '../../Contexts/PhotoContext'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper'


const AdvancedAddPost = () => {

  const { photo, setPhoto } = useContext(PhotoContext)
  const navigation = useNavigation()

  const goingBack = () => {
    setPhoto(null);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => goingBack()}>
          <IconIonicons name='caret-back' size={50} color="black" />
        </Pressable>
      </View>

      
      <View style={styles.pictureTakenContainer}>
        <View style={styles.pictureContainer}>
          <Image source={{ uri: photo && photo?.uri }} style={{ flex: 1 }} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text>Descricao: </Text>
        <TextInput />
      </View>

    </View>
  )
}

export default AdvancedAddPost