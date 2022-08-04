import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <CalculadoraScreen />
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default App;
