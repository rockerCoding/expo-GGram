import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width / 2.3,
    margin: 5,
    borderColor: 'rgba(255,255,255,0.2)',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'black',
    elevation: 10
  },
  closeContainer: {
    position: 'absolute',
    right: 5, top: 1,
  },  
  topContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imageContainer: {
    
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'


  },
  nameContainer: {
    width: '100%',
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 1.5,
    backgroundColor: 'blue',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: 'white',
    //fontSize: '12'
  },

})