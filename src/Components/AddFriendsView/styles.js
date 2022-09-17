import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    height: Dimensions.get("screen").height / 3,
    backgroundColor: 'rgba(255, 255, 255, 0.080)'
  },
  topContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  leftContainer: {
    flex: 1,
    marginLeft: 2
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  textWhite: {
    color: 'white',
    //fontSize: 10
  },
  linkText: {
    color: 'blue',
    //fontSize: 10,
  }
})