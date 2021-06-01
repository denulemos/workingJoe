import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  return (
    <View>
      <View style={{margin: '8%'}}>
        <TextInput
          label="Email"
          selectionColor={'black'}
          outlineColor={'black'}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          label="Contraseña"
          secureTextEntry={true}
          value={contraseña}
          selectionColor={'black'}
          outlineColor={'black'}
          onChangeText={(value) => setContraseña(value)}
        />
        <Button
          style={{marginTop: 30, padding: 5, backgroundColor: 'black'}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Ingresar
        </Button>
        <Button
          style={{marginTop: 10, padding: 5, backgroundColor: 'grey'}}
          mode="contained"
          onPress={() => navigation.navigate('RegistroScreen')}>
          Usuario Nuevo
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
