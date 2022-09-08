import React from 'react';
import {View, Text} from 'react-native';
import {LoadingWheel} from '../LoadingWheel';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <LoadingWheel size={100} />
    </View>
  );
};
