import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [celular, setCelular] = useState('');
  const [contraseña, setContraseña] = useState('');
  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: '1%',
          fontSize: 34,
          marginBottom: '3%',
        }}>
        Registro
      </Text>
      <View style={{margin: '8%'}}>
        <TextInput
          label="Nombre"
          selectionColor={'black'}
          outlineColor={'black'}
          value={nombre}
          onChangeText={(value) => setNombre(value)}
        />
        <TextInput
          label="Apellido"
          selectionColor={'black'}
          outlineColor={'black'}
          value={apellido}
          onChangeText={(value) => setApellido(value)}
        />
        <TextInput
          label="Email"
          selectionColor={'black'}
          keyboardType={'email-address'}
          outlineColor={'black'}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          label="Celular"
          value={celular}
          keyboardType={'phone-pad'}
          selectionColor={'black'}
          outlineColor={'black'}
          onChangeText={(value) => setCelular(value)}
        />
        <TextInput
          textContentType
          label="Contraseña"
          value={contraseña}
          secureTextEntry={true}
          selectionColor={'black'}
          outlineColor={'black'}
          onChangeText={(value) => setContraseña(value)}
        />
        <Button
          style={{marginTop: 30, padding: 5, backgroundColor: 'black'}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Registrarse
        </Button>
      </View>
    </View>
  );
};

export default RegistroScreen;
