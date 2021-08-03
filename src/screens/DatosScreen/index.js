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
    DefaultPreference.get('usuario').then(function (value) {
      setNombre(JSON.parse(value).NOMBRE);
      setApellido(JSON.parse(value).APELLIDO);
      setEmail(JSON.parse(value).MAIL);
      setCelular(JSON.parse(value).CELULAR);
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            }}
          />

          <Text style={styles.name}>{nombre} {apellido} </Text>
          <Text style={styles.userInfo}>{email}</Text>
          <Text style={styles.userInfo}>{celular}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Button
          style={{backgroundColor: 'black', width: '100%'}}
          icon="logout"
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}>
          Log out
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    marginTop: 40,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    height: 500,
    alignItems: 'center',
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
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
});

export default DatosScreen;
