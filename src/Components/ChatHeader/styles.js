import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(38,187,145,1)',
    elevation: 5,
    padding: 0,
    margin: 0
  },
  rightContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
    
  },
  leftContainer: {
    flex: 2,
    marginLeft: 10
  },
  logoText: {
    color: 'white'
  },
  chatText: {
    color: 'white'
  },

  middleContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },


})