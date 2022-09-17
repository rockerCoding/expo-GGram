import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 30,
    padding: 20,
  },

  section: {
    flexDirection: 'row',
    width: Dimensions.get("screen").width * 2
  },
  innerSection: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    justifyContent: 'center',
    alignItems: 'center'
  },

  laterais: {
    position: 'absolute',
    height: Dimensions.get("screen").height,
    zIndex: 20,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  esquerda: {

    left: 0,
  },
  direita: {
    right: 0,
  },

  textInputNative: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    borderRadius: 25,
    
  },
  title: {
    color: 'white',
    fontSize: 20,
    width: '65%',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '700',
    textTransform: "uppercase"
  },
  helperText: {
    marginTop: 10,
    fontSize: 10,
    color: 'yellow',
    
  },

  // imagePicker
  imgContainer: {
    width: Dimensions.get("screen").width * 0.7,
    height: Dimensions.get("screen").width * 0.65,


  },



  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: Dimensions.get("screen").width / 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: Dimensions.get("screen").width / 1,


  },
  textImage: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    bottom: -50,
    

  },

  progressBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get("screen").width,
    zIndex: 100,

  },

  // # 1
  smileyText: {
    fontSize: Dimensions.get("screen").width * 0.5,
    color: 'white',

    justifyContent: 'center',
    alignItems: 'center',

    textAlign: 'center',
    transform: [{ rotate: '90deg' }]
  },


  titleSection: {
    color: "white",
    fontSize: 30,

  },


  contactRow: {
    flexDirection: 'row',
    width: Dimensions.get("screen").width * 0.7,
    marginVertical: 2,
  },
  buttonAddContact: {
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  closeInput: {
    position: 'absolute',
    right: 5,
    top: 5,
    
  }



  /* topContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    
    height: Dimensions.get("screen").height / 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '75%',
    height: '90%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: Dimensions.get("screen").width / 1,
    
  }, 
  textImage: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 5,
    borderRadius: 10,
    bottom: 50
  },


  bottomContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    
    backgroundColor: 'lightgrey'
  },


  //butons
  button: {
    width: '100%',
    paddingVertical: '3%',
    paddingRight: '10%',
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white'
  },

  erroContainer: {
    height: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  erroText: {
    color: 'red',
    fontWeight: '600'
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  

  scrollViewContainer: {
    flex: 1,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingVertical: 20
  },
  dadosPerfil: {
    marginVertical: 20
  },
  section: {
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 15,
    marginBottom: 20
  },
  titleSection: {
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderStyle: 'solid',
  }
 */





})