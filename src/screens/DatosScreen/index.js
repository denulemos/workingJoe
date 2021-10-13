import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import DefaultPreference from 'react-native-default-preference';

const DatosScreen = ({navigation}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');

  useEffect(() => {
    DefaultPreference.get('usuario')
      .then((value) => {
        setNombre(JSON.parse(value).NOMBRE);
        setApellido(JSON.parse(value).APELLIDO);
        setEmail(JSON.parse(value).MAIL);
        setCelular(JSON.parse(value).CELULAR);
      })
      .catch(() => {
        setNombre('Nombre');
        setApellido('Apellido');
        setEmail('Email@gmail.com');
        setCelular('+541123345678');
      });
  });

  const logOut = () => {
    DefaultPreference.set('usuario', null).then(function () {
      console.log('done');
    });
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.body}>
      <View style={styles.info}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
        />

        <Text style={styles.name}>
          {nombre} {apellido}
        </Text>
        <Text style={styles.userInfo}>{email}</Text>
        <Text style={styles.userInfo}>{celular}</Text>
      </View>
      <Button style={styles.button} mode="contained" onPress={() => logOut()}>
        Modificar Datos
      </Button>
      <Button
        style={styles.buttonLogOut}
        icon="logout"
        mode="contained"
        onPress={() => logOut()}>
        Log out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    width: '50%',
    marginTop: 20,
  },
  buttonLogOut: {
    backgroundColor: 'black',
    width: '50%',
    marginTop: 5,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    marginLeft: 20,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
});

export default DatosScreen;
