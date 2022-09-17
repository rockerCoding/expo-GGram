import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './src/Contexts/AuthContext';
import RoutesProvider from './src/Contexts/RoutesContext';

import OpenView from './src/Screens/OpenView'

import { Provider as PaperProvider } from 'react-native-paper';
import ContactsList from './src/Components/ContactsList';


export default function App() {
  return (


    <PaperProvider>
      <RoutesProvider>
        <AuthProvider>
          <OpenView />
        </AuthProvider>
      </RoutesProvider>
    </PaperProvider>

    /*     <View style={{flex: 1}}>
          <ContactsList />
        </View> */
  );
}
