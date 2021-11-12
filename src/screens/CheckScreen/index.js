import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Button, Text} from 'react-native-paper';
const CheckScreen = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Check in / out</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Proyecto" value="java" />
        <Picker.Item label="Mock" value="Mock" />
        <Picker.Item label="Mock" value="Mock" />
        <Picker.Item label="Mock" value="Mock" />
      </Picker>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Tarea" value="java" />
        <Picker.Item label="Mock" value="Mock" />
        <Picker.Item label="Mock" value="Mock" />
        <Picker.Item label="Mock" value="Mock" />
      </Picker>
      <Button
        style={styles.checkOutButton}
        icon="cancel"
        mode="contained"
        onPress={() => {}}>
        Check Out
      </Button>
      <Button
        style={styles.checkInButton}
        icon="check"
        mode="contained"
        onPress={() => {}}>
        Check in
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  checkInButton: {
    backgroundColor: 'green',
    marginTop: 10,
  },
  checkOutButton: {
    backgroundColor: 'red',
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  titulo: {
    textAlign: 'center',
    marginTop: '18%',
   fontWeight: 'bold',
    fontSize: 34,
    marginBottom: '10%',
  },
});

export default CheckScreen;
