import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

const DatosScreen = ({navigation}) => {
  return (
    <View style={styles.datosContainer}>
      <View style={styles.fotoPerfil}>
        <Avatar.Icon size={100} icon="account" />
        <Text style={styles.nombreUsuario}>Nombre Apellido Mock</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datosContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  nombreUsuario: {
    textAlign: 'center',
    marginTop: '8%',
    fontSize: 23,
    width: '50%',
    marginBottom: '3%',
    marginLeft: '5%',
  },
  fotoPerfil: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    flex: 1,
    width: '100%',
    paddingTop: '20%',
  },
});

export default DatosScreen;
