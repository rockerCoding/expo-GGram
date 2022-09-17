import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  chatContainer: {
    justifyContent: 'flex-end',
    paddingTop: 5,
  },
  messageInputContainer: {
    height: Dimensions.get("screen").height / 14,
    width: '100%',
    backgroundColor: 'rgba(220, 220, 220, 0.9)',
    paddingVertical: 5,
    bottom: 0,
    justifyContent: 'center',
  },
  messageText: {
    color: 'black',
    //fontSize: 16
  },
  sendMessageContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  inputContainer: {
    flex: 9,
    height: '100%',
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    
    textAlign:"justify",
    textAlignVertical: "center",
    //fontSize: 16
  },

  buttonContainer: {
    flex: 1
  }
})