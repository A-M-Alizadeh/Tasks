import React from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/common/action';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const exit = () => {
    dispatch(logout());
    navigation.replace('login');
  };
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h2>Dashboard</Text>
        <Text h4 style={{color: colors.secondary}}>
          {user.username}
        </Text>
        <Button
          onPress={exit}
          title=" Logout"
          icon={<Icon name="sign-out" size={15} color="white" />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
