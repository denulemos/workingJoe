import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text, Portal, Dialog} from 'react-native-paper';
import UserService from '../../services/UserService';
import DefaultPreference from 'react-native-default-preference';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [textoModal, setTextoModal] = useState('');

  useEffect(() => {
    DefaultPreference.get('usuario').then(function (value) {
      if (value !== null && value !== undefined) {
        console.log(value);
        navigation.navigate('CheckScreen');
        return;
      }
    });
  });

  const validarCampos = () => {
    if (email.length === 0 || contraseña.length === 0) {
      setTextoModal('Completá todos los campos');
      setMostrarModal(true);
    } else {
      loginUsuario();
    }
  };

  const loginUsuario = () => {
    UserService.login().then((res) => {
      const arrayUsuarios = JSON.parse(JSON.stringify(res.data.items));
      for (let i = 0; i < arrayUsuarios.length; i++) {
        if (
          arrayUsuarios[i].MAIL === email &&
          arrayUsuarios[i].CLAVE === contraseña
        ) {
          storeData(arrayUsuarios[i]);
          return;
        }
      }
      // setTextoModal('Usuario no encontrado');
      // setMostrarModal(true);
      navigation.navigate('CheckScreen');
    });
  };

  const storeData = (value) => {
    try {
      DefaultPreference.set('usuario', JSON.stringify(value)).then(function () {
        console.log('done');
      });
      setTextoModal('Bienvenido ' + value.NOMBRE + '!');
      setMostrarModal(true);
      navigation.navigate('CheckScreen');
    } catch (e) {
      setTextoModal('Ocurrió un error, por favor intentar más tarde ' + e);
      setMostrarModal(true);
    }
  };

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
          onPress={() => validarCampos()}>
          Ingresar
        </Button>
        <Button
          style={styles.registroButton}
          mode="contained"
          onPress={() => navigation.navigate('RegistroScreen')}>
          Usuario Nuevo
        </Button>
        <Text style={styles.textHelp}>¿Tenés dudas? Contactanos</Text>
        <Text style={styles.textHelp}>Olvidé mi contraseña</Text>
      </View>
      <Portal>
        <Dialog visible={mostrarModal} onDismiss={() => setMostrarModal(false)}>
          <Dialog.Title>{textoModal}</Dialog.Title>
          <Dialog.Actions>
            <Button onPress={() => setMostrarModal(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  textHelp: {
    textAlign: 'center',
  },
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
