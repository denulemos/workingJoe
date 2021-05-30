import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button } from 'react-native-paper';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        label="Contraseña"
        value={contraseña}
        onChangeText={(value) => setContraseña(value)}
      />
       <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </View>
  );
};

export default LoginScreen;
