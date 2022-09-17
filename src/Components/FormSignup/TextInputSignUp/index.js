import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const TextInputSignUp = ({value, setValue, label, multiline, numberOfLines, secure}) => {

  return (
    <TextInput 
      mode='outlined'
      value={value}
      onChangeText={(text) => setValue(text) }
      label={label}
      multiline={multiline ? true : false}
      numberOfLines={numberOfLines ? numberOfLines : 1}
      secureTextEntry={secure}
      style={{
        marginVertical: 5
      }}
      
    />
  )
}

export default TextInputSignUp