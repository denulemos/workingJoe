import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Working Joe</Text>
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
          style={styles.buttonCheckStyle}
          mode="contained"
          onPress={() => navigation.navigate('CheckScreen')}>
          Ingresar
        </Button>
        <Button
          style={styles.registroButton}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: '18%',
    fontSize: 34,
    marginBottom: '10%',
  },
  buttonCheckStyle: {marginTop: 30, padding: 5, backgroundColor: 'black'},
  registroButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: 'grey',
    marginBottom: 20,
  },
});

export default LoginScreen;
