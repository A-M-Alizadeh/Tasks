import React, {useState, useEffect} from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import * as colors from './../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {login, setCurrentUser} from '../../redux/common/action';
import _ from 'lodash';
import {appToast} from '../../utils';

export default function Login({navigation}) {
  const userList = useSelector((state) => state.user.usersList);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function callActions(user) {
    dispatch(login());
    dispatch(setCurrentUser(user));
    navigation.replace('dashboard');
  }

  const validate = () => {
    return username.trim().length > 0 && password.trim().length > 0;
  };
  const checkUser = () => {
    const user = _.find(userList, {username, password});
    user
      ? callActions(user)
      : appToast('User Does Not Exist or Username or Password are wrong !');
  };

  const submit = () => {
    validate() ? checkUser() : appToast('Validation Failed !');
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h4>Login</Text>
        <Input
          value={username}
          onChangeText={(value) => setUsername(value)}
          placeholder="Username"
          leftIcon={{
            type: 'font-awesome',
            name: 'user',
            color: colors.secondary,
          }}
          errorStyle={{color: colors.secondary}}
          // errorMessage="ENTER A VALID ERROR HERE"
        />
        <Input
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Password"
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: colors.secondary,
          }}
          errorStyle={{color: colors.secondary}}
          // errorMessage="ENTER A VALID ERROR HERE"
          secureTextEntry
        />
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <Text h6 onPress={() => navigation.navigate('register')}>
            Register !
          </Text>
        </View>
        <Button
          onPress={submit}
          title=" Login"
          icon={<Icon name="sign-in" size={15} color="white" />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
