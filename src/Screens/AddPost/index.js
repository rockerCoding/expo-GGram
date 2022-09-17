import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { useContext, useRef, useState } from 'react';
import { Button, FlatList, Image, Pressable, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PhotoContext } from '../../Contexts/PhotoContext';
import { styles } from './styles';



const AddPost = () => {
  const [startCamera, setStartCamera] = useState(false)
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [activeMode, setActiveMode] = useState(0)

  const [photo, setPhoto] = useState(null)

  const [listaModos, setListaModos] = useState([
    "Foto", "Vídeo"
  ])

  const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }


  const toggleCameraType = () => {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  const shotCamera = async () => {
    //if (!camera) return
    await camera.takePictureAsync().then((res) => {
      setPhoto(res)
    })
  }

  let camera

  const modesList = ["FOTO", "VIDEO"]

  const confirmarTela = () => {
    navigation.navigate("AdvancedAddPost")
  }

  const cancelPhoto = () => {
    setPhoto(null)
  }

  const TakePhoto = () => {
    return (
      <View style={{ flex: 1 }}>
        {
          photo ?
            <View style={styles.pictureTakenContainer}>
              <View style={styles.pictureContainer}>
                <Image source={{ uri: photo && photo.uri }} style={{ flex: 1 }} />
              </View>
            </View> :
            <Camera style={styles.camera} type={type} ref={(r) => { camera = r }}>
              <View style={styles.backButtonContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                  <IconIonicons name='caret-back' size={50} color="white" />
                </Pressable>
              </View>
            </Camera>
        }
      </View>
    )
  }

  const mapsScreens = [
    TakePhoto
  ]

  return (
    <View style={styles.container}>
      
      <View style={styles.topContainer}>
        {
          photo ?
            <View style={styles.pictureTakenContainer}>
              <View style={styles.pictureContainer}>
                <Image source={{ uri: photo && photo.uri }} style={{ flex: 1 }} />
              </View>
            </View> :
            <Camera style={styles.camera} type={type} ref={(r) => { camera = r }}>
              <View style={styles.backButtonContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                  <IconIonicons name='caret-back' size={50} color="white" />
                </Pressable>
              </View>
            </Camera>
        }
      </View>

      <View style={styles.bottomContainer}>

        <View style={styles.modesContainer}>
          <FlatList
            data={modesList}
            renderItem={({ item, index }) =>
              <Pressable
                style={[styles.modeContainer, activeMode == index ? styles.actived : styles.deactived]} onPress={() => setActiveMode(index)}>
                <Text style={styles.modeText}>{item}</Text>
              </Pressable>}
            horizontal
            contentContainerStyle={styles.modesFlatList}
          />
        </View>
        <View style={styles.buttonsContainer}>
          {
            photo ?
              <Pressable onPress={() => cancelPhoto()}>
                <IconIonicons name='md-close-circle' size={60} color="white" />
              </Pressable> :
              <Pressable onPress={() => shotCamera()}>
                <IconMaterialCommunityIcons name='camera-iris' size={60} color="white" />
              </Pressable>
          }

          {
            photo ?
              <Pressable onPress={() => confirmarTela()}>
                <IconMaterialCommunityIcons name='check-circle' size={60} color="white" />
              </Pressable> :
              <Pressable onPress={toggleCameraType}>
                <IconMaterialCommunityIcons name='camera-flip' size={60} color="white" />
              </Pressable>
          }


        </View>
      </View>

    </View>
  );
}

export default AddPost

