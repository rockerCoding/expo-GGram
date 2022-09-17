import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height / 2,
    marginBottom: 5

  },
  topContainer: {
    flex: 1/10,
    flexDirection: 'row',
    paddingVertical: 5,    
  },
  middleContainer: {
    flex: 7/10,
    backgroundColor: 'blue'
  },
  bottomContainer: {
    flex: 2/10,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10
  },

  // top container
  userPostContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  optionUserPostContainer: {
    flex: 1/10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },  
  userProfileContainer: {

  },
  userLocationContainer: {
    marginLeft: 10
  },
  userPostNameText: {
    color: 'white',
    fontWeight: '500'
    
  },
  locationText:{
    color: 'white',
    fontSize: 10
  },

  
  username: {
    fontWeight: '800' ,
    color: 'white',
  },
  text: {
    color: 'white',
    fontWeight: '200'
  },

  toolsPostContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  leftToolsContainer: {
    flex: 9/10, 
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  rightToolsContainer: {
    flex: 1/10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  }
})