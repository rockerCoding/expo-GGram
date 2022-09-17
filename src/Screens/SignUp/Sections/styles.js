import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get("screen").width * 2,
    height: Dimensions.get("screen").height
  },
  innerSection: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInputNative: {
    height: 40,
    width: Dimensions.get("screen").width * 0.7,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },

  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red'
  },
  title: {
    color: 'white',
    fontSize: 30,
    width: '80%',
    
  },

  content: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    
  }, 
  indicatorText: {
    color: 'yellow',
    marginBottom: 5
  },

  errorContainer: {
    flex: 1
  },
  

  textAlertContainer: { 
    marginTop: 10,
    padding: 10, 
    backgroundColor: 'red',
    borderRadius: 10,
  },
  textAlert: {
    color: 'white',
    fontSize: 10
  },
  buttonMoreContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },



  // ContactsForm
  contactContainer: {
    width: Dimensions.get('screen').width * 0.7,
    height: 70,
    flexDirection: 'row',
    
  },
  textInputContainer: {
    flex: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonMoveContainer: {
    backgroundColor: 'yellow'
  },
  dragContainer: {
    //height: 300,
  }
})