import { StyleSheet } from "react-native";

export const styles = StyleSheet. create({
  container: {
    height: 40,
    marginVertical: 2,
    flexDirection: 'row'
  },
  textInputNative: {
    backgroundColor: 'white',
    flex: 1,
    
    borderRadius: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactRow: {
    flex: 1,
    flexDirection: 'row',
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
  },
  typeContainer: {
    width: '15%',
    height: '100%',
    position:'absolute',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },













  textAreaInput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
  }
})