import React from 'react';
import {View, Text, Button} from 'react-native';

export const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
