/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Keyboard from './src/components/Keyboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <TextInput style={{padding: 3, backgroundColor: 'red'}} />
      </View>
      <Keyboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});

export default App;
