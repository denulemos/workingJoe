import React from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({item, onPress}) => (
  <TouchableOpacity
    style={{
      marginTop: 10,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      borderBottomWidth: 0.2,
      paddingBottom: 10,
    }}
    onPress={onPress}>
    <Text style={{marginRight: '45%', fontSize: 20}}>{item.title}</Text>

    <TouchableOpacity style={{marginRight: 10}} onPress={() => {}}>
      <MaterialCommunityIcons size={20} name="pen" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => console.log('fs')}>
      <MaterialCommunityIcons size={20} name="eye" />
    </TouchableOpacity>
  </TouchableOpacity>
);

const DATA = [
  {
    id: '1',
    title: 'Proyecto Mock',
  },
  {
    id: '2',
    title: 'Proyecto Mock',
  },
  {
    id: '3',
    title: 'Proyecto Mock',
  },
  {
    id: '4',
    title: 'Proyecto Mock',
  },
  {
    id: '5',
    title: 'Proyecto Mock',
  },
  {
    id: '6',
    title: 'Proyecto Mock',
  },
];

const ProyectosScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => {}} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.proyectoTitle}>Proyectos</Text>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => console.log('fs')}>
          <MaterialCommunityIcons size={38} name="plus" color={'green'} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.buttonContainer}>
        <Button
          style={styles.usuariosButton}
          mode="contained"
          onPress={() => {}}>
          Tareas
        </Button>
        <Button
          style={styles.usuariosButton}
          mode="contained"
          onPress={() => {}}>
          Usuarios
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usuariosButton: {backgroundColor: 'black', marginTop: 10},
  buttonContainer: {display: 'flex', flexDirection: 'column'},
  list: {padding: 10},
  container: {flex: 1, alignContent: 'center', justifyContent: 'center'},
  proyectoTitle: {
    textAlign: 'center',
    marginTop: '1%',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  headerContainer: {display: 'flex', flexDirection: 'row'},
  container: {
    flex: 1,
    marginTop: '20%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 30,
  },
});

export default ProyectosScreen;
