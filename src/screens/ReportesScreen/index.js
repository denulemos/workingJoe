import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
const ReportesScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> Reportes </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '18%',
    fontSize: 34,
    marginBottom: '10%',
  },
});

export default ReportesScreen;
