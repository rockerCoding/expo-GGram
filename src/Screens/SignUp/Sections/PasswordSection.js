import { View, Text } from 'react-native'
import React from 'react'

const ImageSection = () => {
  return (
    <View style={[styles.section]} >
      <View style={[styles.innerSection, { backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.title}>{nome}, insira sua imagem de perfil</Text>
        <View style={styles.imgContainer}>
          <TouchableOpacity
            onPress={() => pickImage()}
            style={styles.imageContainer}>
            <Image
              source={image ? { uri: image } : require('../../../assets/imgs/profile_.jpg')}
              resizeMode="stretch"
              style={styles.image}
            />
            <View style={styles.textImage}>
              <Text>Clique para alterar a foto</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.translate}>
        <LinearGradient
          style={{
            height: Dimensions.get("screen").height,
            width: Dimensions.get("screen").width,
            borderRadius: 5
          }}

          start={{ x: 0, y: 0 }}
          end={{ x: 100, y: 0 }}

          colors={['red', '#FF7F50']}>
        </LinearGradient>
      </View>
    </View>
  )
}

export default ImageSection