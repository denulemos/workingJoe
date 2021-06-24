import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {TextInput, Button, Text} from 'react-native-paper';
const CheckScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 50,
      }}>
         <Text
        style={{
          textAlign: 'center',
          marginTop: '18%',
          fontSize: 34,
          marginBottom: '10%',
        }}>
        Check in / out
      </Text>
     <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Proyecto" value="java" />
      </Picker>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Tarea" value="java" />
      </Picker>
      <Button
        style={{backgroundColor: 'red', marginTop: 10}}
        icon="cancel"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Check Out
      </Button>
      <Button
        style={{backgroundColor: 'green', marginTop: 10}}
        icon="check"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Check in
      </Button>
    </View>
  );
};

export default CheckScreen;
