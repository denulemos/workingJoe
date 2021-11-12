import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistroScreen from './src/screens/RegistroScreen';
import DefaultPreference from 'react-native-default-preference';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeTabs from './src/navigation/HomeTabs';
const Stack = createStackNavigator();

const App = ({navigation}) => {
  useEffect(() => {
    DefaultPreference.get('usuario').then(function (value) {
      if (value !== null && value !== undefined) {
        console.log(value);
        navigation.navigate('CheckScreen');
        return;
      }
    });
  }, []);

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
