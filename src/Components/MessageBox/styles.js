import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: 40,
    marginVertical: 0.5
  },
  messagemContainer: {
    flexDirection: 'row',
    width: '50%',
    height: '100%',
  },
  messageBallonContainer: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    maxWidth: Dimensions.get("screen").width / 1.8,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  messageBallonText: {
    color: 'white',
  }, 
  destaqueContainer: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})