import React, {useState} from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from './../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createUser} from '../../redux/common/action';
import {useDispatch} from 'react-redux';
import {appToast} from '../../utils';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const validate = () => {
    return (
      username.trim().length > 0 &&
      password.trim().length > 0 &&
      repeatPassword.trim().length > 0 &&
      password.trim() === repeatPassword.trim()
    );
  };

  const submit = () => {
    validate()
      ? dispatch(createUser({username, password}, navigation))
      : appToast('Validation Failed !');
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h4>Register</Text>
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
        <Input
          value={repeatPassword}
          onChangeText={(value) => {
            setRepeatPassword(value);
          }}
          placeholder="Repeat Password"
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: colors.secondary,
          }}
          errorStyle={{color: colors.secondary}}
          // errorMessage="ENTER A VALID ERROR HERE"
          secureTextEntry
        />
        <Button
          title=" Register"
          icon={<Icon name="user-plus" size={15} color="white" />}
          onPress={submit}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
