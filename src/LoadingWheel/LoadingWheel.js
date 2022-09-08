import LottieView from 'lottie-react-native';
import React from 'react';

import PreloaderLoop from './moxPreloader.json';
import {loadingStyles} from './styles';

export const LoadingWheel = ({size}) => (
  <LottieView
    resizeMode="contain"
    source={PreloaderLoop}
    style={[loadingStyles.wheel, !!size && {width: size, height: size}]}
    autoPlay={true}
    loop={true}
  />
);

LoadingWheel.displayName = 'LoadingWheel';
