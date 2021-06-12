import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
    </View>
  );
};

export default HomeScreen;
