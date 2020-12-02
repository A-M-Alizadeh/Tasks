import React, {useEffect} from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/common/action';
import axios from 'axios';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const exit = () => {
    dispatch(logout());
    navigation.replace('login');
  };

  useEffect(() => {
    console.log('log here fast');
    axios
      .get('http://api.github.com/users/hacktivist123/repos')
      .then(function (response) {
        console.log('axios', response);
      })
      .catch(function (error) {
        console.log('axios error', error);
      });

    fetch('http://api.github.com/users/hacktivist123/repos')
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log('log here slow');
  }, []);

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
