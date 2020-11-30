import React from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import * as colors from './../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {
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
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <Text h6 onPress={()=>navigation.navigate('register')}>Register !</Text>
        </View>
        <Button
          title=" Login"
          icon={<Icon name="sign-in" size={15} color="white" />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
