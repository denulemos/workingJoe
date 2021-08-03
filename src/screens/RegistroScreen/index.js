import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text, Portal, Dialog} from 'react-native-paper';
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
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
      setTextoModal('Email invalido');
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
          label="Contraseña"
          value={contraseña}
          secureTextEntry={true}
          selectionColor={'black'}
          outlineColor={'black'}
          onChangeText={(value) => setContraseña(value)}
        />
        <Button
          style={{
            marginTop: 30,
            padding: 5,
            backgroundColor: 'black',
          }}
          mode="contained"
          onPress={() => validarCampos()}>
          Registrarse
        </Button>
        <Button
          style={{marginTop: 10, padding: 5, backgroundColor: 'grey'}}
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}>
          Volver
        </Button>
        <Portal>
          <Dialog
            visible={mostrarModal}
            onDismiss={() => setMostrarModal(false)}>
            <Dialog.Title>{textoModal}</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={() => setMostrarModal(false)}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default RegistroScreen;
