import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import PortalModal from '../../components/PortalModal';
import UserService from '../../services/UserService';

const RegistroScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [celular, setCelular] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [textoModal, setTextoModal] = useState('');

  const validarCampos = () => {
    if (
      email.length === 0 ||
      nombre.length === 0 ||
      apellido.length === 0 ||
      contraseña.length === 0 ||
      celular.length === 0
    ) {
      setTextoModal('Completá todos los campos');
      setMostrarModal(true);
    } else {
      registroUsuario();
    }
  };

  const registroUsuario = () => {
    UserService.registro(nombre, apellido, contraseña, celular, email).then(
      (res) => {
        const response = JSON.parse(res);
        if (response.success) {
          setTextoModal('Usuario creado correctamente!');
          setMostrarModal(true);
          navigation.navigate('LoginScreen');
        } else {
          setTextoModal('Ocurrió un error: ' + response.error.message);
          setMostrarModal(true);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
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
          label="Contraseña"
          value={contraseña}
          secureTextEntry={true}
          selectionColor={'black'}
          outlineColor={'black'}
          onChangeText={(value) => setContraseña(value)}
        />
        <Button
          style={styles.registerButton}
          mode="contained"
          onPress={() => validarCampos()}>
          Registrarse
        </Button>
        <Button
          style={styles.loginButton}
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}>
          Volver
        </Button>
        <PortalModal
          mostrarModal={mostrarModal}
          textoModal={textoModal}
          textoBoton={'Ok'}
          funcionModal={() => setMostrarModal(!mostrarModal)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: 'grey',
  },
  registerButton: {
    marginTop: 30,
    padding: 5,
    backgroundColor: 'black',
  },
  titulo: {
    textAlign: 'center',
    marginTop: '1%',
    fontSize: 34,
    marginBottom: '1%',
  },
  container: {flex: 1, alignContent: 'center', justifyContent: 'center'},
});

export default RegistroScreen;
