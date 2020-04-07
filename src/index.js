import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

console.disableYellowBox = true;

import Routes from './routes';

export default function src() {
  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#212b46" />
        <Routes/>
    </>
  );
}
