import React from 'react';
import {Text, ThemeProvider} from 'react-native-elements';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from './../../utils/colors';

export default function Splash() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h4>Heeey !</Text>
        <ActivityIndicator size="large" color={colors.secondary} />
      </SafeAreaView>
    </ThemeProvider>
  );
}
