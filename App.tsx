import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import CarList from './src/features/CarList';
import SP from './src/components/SP';

const App = () => (
  <View style={styles.container}>
    <Header />
    <SP />
    <CarList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
