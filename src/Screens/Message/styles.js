import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  pesquisarContainer: {
    height: Dimensions.get("screen").height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  barraPesquisaContainer: {

    flexDirection: 'row',
    width: '90%',
    height: '70%',
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 15,
    alignItems: 'center'
  }, 
  inputSearch: {
    width: '100%',
    color: 'white',
    marginLeft: 10,
    
  },
  
})