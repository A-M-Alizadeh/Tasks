import React, {useEffect} from 'react';
import {Text, ThemeProvider} from 'react-native-elements';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from './../../utils/colors';
import {useSelector} from 'react-redux';

export default function Splash({navigation}) {
  const {isLoggedIn} = useSelector((state) => state.auth);
  const {rehydrated} = useSelector((state) => state._persist);

  useEffect(() => {
    setTimeout(() => {
      if (rehydrated) {
        isLoggedIn
          ? navigation.replace('dashboard')
          : navigation.replace('login');
      }
    }, 1000);
  });

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h4>Heeey !</Text>
        <ActivityIndicator size="large" color={colors.secondary} />
      </SafeAreaView>
    </ThemeProvider>
  );
}
