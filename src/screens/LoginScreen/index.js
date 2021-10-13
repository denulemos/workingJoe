import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import UserService from '../../services/UserService';
import DefaultPreference from 'react-native-default-preference';
import PortalModal from '../../components/PortalModal';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [textoModal, setTextoModal] = useState('');
  const [loading, setLoading] = useState(false);

  const validarCampos = () => {
    setLoading(true);
    if (email.length === 0 || contraseña.length === 0) {
      setTextoModal('Completá todos los campos');
      setMostrarModal(true);
      setLoading(false);
    } else {
      loginUsuario();
    }
  };

  const loginUsuario = () => {
    UserService.login().then((res) => {
      setTextoModal(JSON.parse(JSON.stringify(res.data)));
      // setMostrarModal(true);
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

      // Se descomentará este proceso cuando tengamos servicios
      // setTextoModal('Usuario no encontrado');
      // setMostrarModal(true);
      setLoading(false);
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
      setLoading(false);
      navigation.navigate('CheckScreen');
    } catch (e) {
      // setTextoModal('Ocurrió un error, por favor intentar más tarde ' + e);
      // setMostrarModal(true);
      // setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Working Joe</Text>
      <View style={styles.inputContainer}>
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
        <ActivityIndicator
          style={{display: loading ? 'flex' : 'none', marginTop: '2%'}}
          size="large"
          color="black"
        />
      </View>
      <PortalModal
        mostrarModal={mostrarModal}
        textoModal={textoModal}
        textoBoton={'Ok'}
        funcionModal={() => setMostrarModal(!mostrarModal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {margin: '8%'},
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
