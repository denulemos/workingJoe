import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import {TextInput, Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity style={{marginTop: 10, marginBottom: 10, display: 'flex', flexDirection: 'row', borderBottomWidth: 0.2, paddingBottom: 10}} onPress={onPress}>
    <Text style={{marginRight: '50%'}}>{item.title}</Text>

    
    <TouchableOpacity
         style={{marginRight: 10}}
          onPress={() => console.log('fs')}>
          <MaterialCommunityIcons size={20} name="pen" />
    
        </TouchableOpacity>
        <TouchableOpacity
          
          onPress={() => console.log('fs')}>
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
    return <Item item={item} onPress={() => console.log('sfs')} />;
  };
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 30,
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: '1%',
            fontSize: 34,
            marginBottom: '3%',
          }}>
          Proyectos
        </Text>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => console.log('fs')}>
          <MaterialCommunityIcons size={38} name="plus" color={'green'} />
        </TouchableOpacity>
      </View>


      <FlatList
      style={{ padding: 10}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    
<View style={{display: 'flex', flexDirection: 'column'}}>
<Button
        style={{backgroundColor: 'black', marginTop: 10}}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Tareas
      </Button>
      <Button
        style={{backgroundColor: 'black', marginTop: 10}}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Usuarios
      </Button>
      </View>
    </View>
  );
};

export default ProyectosScreen;
