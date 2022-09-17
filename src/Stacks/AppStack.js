import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Add from '../Screens/Add';
import Message from '../Screens/Message';
import Conversa from '../Screens/Conversa';
import AddNewChat from '../Screens/AddNewChat';
import ConversaProvider from '../Contexts/ConversaContext';
import AddPost from '../Screens/AddPost';




const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <ConversaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false
          }}>

          
          <Stack.Screen name="AddPost" component={AddPost} options={{ animation: 'slide_from_left'}}/>
          
          <Stack.Screen name="Home" component={Home} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Message' component={Message} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="Conversa" component={Conversa} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="AddNewChat" component={AddNewChat} />



        </Stack.Navigator>
      </NavigationContainer>
    </ConversaProvider>
  );
}

export default AppStack;