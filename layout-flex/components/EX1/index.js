import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  squre1: {
    width: 50,
    height: 50,
    backgroundColor: '#FFB74D',
  },
  squre2: {
    width: 50,
    height: 50,
    backgroundColor: '#E65100',
  },
  squre3: {
    width: 50,
    height: 50,
    backgroundColor: '#FF6D00',
  },
});

const EX1 = () => (
  <View style={styles.container}>
    <View style={styles.squre1} />
    <View style={styles.squre2} />
    <View style={styles.squre3} />
  </View>
);

export default EX1;
