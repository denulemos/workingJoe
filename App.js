import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistroScreen from './src/screens/RegistroScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeTabs from './src/navigation/HomeTabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegistroScreen"
            component={RegistroScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CheckScreen"
            component={HomeTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ModificarScreen"
            component={HomeTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
