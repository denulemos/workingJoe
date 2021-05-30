import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};


export default App;
