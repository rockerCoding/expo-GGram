import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black'
  },
  backButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    flex: 5,
  },
  bottomContainer: {
    width: '100%',
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
    
  },

  pictureTakenContainer: {
    flex: 1,
  },
  pictureContainer: {
    flex: 1
  },
  dismissButton: {
    backgroundColor: 'rgba(1,1,1,0)'
  },
  carrouselContainer: {
    backgroundColor: 'red',
    
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  modesContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  modeContainer: {
    width: Dimensions.get("screen").width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 10
  },
  modesFlatList: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  actived: {
    backgroundColor: 'green',
    
  },
  deactived: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 0.1,
    borderStyle: 'solid'
  },
  modeText: {
    color: 'white',
    letterSpacing: 5,
    textAlign: 'center'
  }


})