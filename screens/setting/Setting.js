import React from 'react';
import {Text, ThemeProvider} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from './../../utils/colors';

export default function Setting() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h4>Setting !</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
