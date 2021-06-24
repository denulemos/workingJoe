import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: '18%',
          fontSize: 34,
          marginBottom: '10%',
        }}>
        Working Joe
      </Text>
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
          onPress={() => navigation.navigate('CheckScreen')}>
          Ingresar
        </Button>
        <Button
          style={{
            marginTop: 10,
            padding: 5,
            backgroundColor: 'grey',
            marginBottom: 20,
          }}
          mode="contained"
          onPress={() => navigation.navigate('RegistroScreen')}>
          Usuario Nuevo
        </Button>
        <Text
          style={{
            textAlign: 'center',
          }}>
          ¿Tenés dudas? Contactanos
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
