import React from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Dashboard({navigation}) {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h2>Dashboard</Text>
        <Text h5>username</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
