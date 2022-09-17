import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(38,187,145,1)',
    elevation: 5,
    padding: 0,
    margin: 0
  },
  rightContainer: {
    flex: 1/2,
    flexDirection: 'row',
    marginRight: 0,
    justifyContent: 'space-evenly',
    alignItems: "center"
    
  },
  leftContainer: {
    flex: 1,
    marginLeft: 20
  },
  logoText: {
    color: 'white'
  },
  chatText: {
    color: 'white'
  }


})