import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  destaque: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  }, 
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  profileImage: {
    borderRadius: 100,
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 2,
    elevation: 5
  }
})