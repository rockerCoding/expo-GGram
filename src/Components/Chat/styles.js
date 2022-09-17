import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height / 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  text: {
    color: 'white',
    marginLeft: 15
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})