import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 30
  },

  topContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
  },


  //butons
  button: {
    width: '100%',
    paddingVertical: '3%',
    paddingRight: '10%',
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white'
  },

  erroContainer: {
    height: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  erroText: {
    color: 'red',
    fontWeight: '600'
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  }


  



})