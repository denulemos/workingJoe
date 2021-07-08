import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {TextInput, Button, Text} from 'react-native-paper';
const ReportesScreen = ({navigation}) => {
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
          fontWeight: 'bold',
          marginTop: '18%',
          fontSize: 34,
          marginBottom: '10%',
        }}>
        Reportes
      </Text>

    </View>
  );
};

export default ReportesScreen;
