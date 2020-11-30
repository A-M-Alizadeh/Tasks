import React from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import * as colors from './../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Text h4>Login</Text>
        <Input
          placeholder="Username"
          leftIcon={{
            type: 'font-awesome',
            name: 'user',
            color: colors.secondary,
          }}
          onChangeText={(value) => this.setState({comment: value})}
          errorStyle={{color: colors.secondary}}
          errorMessage="ENTER A VALID ERROR HERE"
        />
        <Input
          placeholder="Password"
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: colors.secondary,
          }}
          onChangeText={(value) => this.setState({comment: value})}
          errorStyle={{color: colors.secondary}}
          errorMessage="ENTER A VALID ERROR HERE"
          secureTextEntry
        />
        <Button
          title=" Register"
          icon={
            <Icon
              name="sign-in"
              size={15}
              color="white"
            />
          }
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}