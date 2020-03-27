import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import { Welcome } from './screens/Welcome'
import { Home } from './screens/Home';
import { Wrapper } from './hoc/Wrapper'
import DocsNatigator from './navigation/DocsNatigator';

export default function App() {
  return (
    <DocsNatigator goBack={() => setContent('WelcomePage')}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
