import React from 'react';
import DatosScreen from '../screens/DatosScreen';
import CheckScreen from '../screens/CheckScreen';
import ReportesScreen from '../screens/ReportesScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProyectosScreen from '../screens/ProyectosScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
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
      <Tab.Screen name="Reportes" component={ReportesScreen}  options={{
          tabBarLabel: 'Reportes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}/> 
      <Tab.Screen name="Datos" component={DatosScreen}  options={{
          tabBarLabel: 'Datos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/> 
    </Tab.Navigator>
  );
}


export default HomeTabs;
