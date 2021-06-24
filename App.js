import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CheckScreen from './src/screens/CheckScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProyectosScreen from './src/screens/ProyectosScreen';
import RegistroScreen from './src/screens/RegistroScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CheckScreen" component={CheckScreen}  options={{
          tabBarLabel: 'Check',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="check" color={color} size={size} />
          ),
        }}/> 
      <Tab.Screen name="Proyectos" component={ProyectosScreen}  options={{
          tabBarLabel: 'Proyectos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lock" color={color} size={size} />
          ),
        }}/> 
      <Tab.Screen name="Reportes" component={CheckScreen}  options={{
          tabBarLabel: 'Reportes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}/> 
      <Tab.Screen name="Datos" component={CheckScreen}  options={{
          tabBarLabel: 'Datos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/> 
    </Tab.Navigator>
  );
}

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
