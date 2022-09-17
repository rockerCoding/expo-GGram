import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContacts: {
    width: Dimensions.get("screen").width * 0.7, 
  },
  textInputNative: {
    backgroundColor: 'white',
    flex: 1,
    height: 40,
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10
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
  }
})