/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet,  Text, View } from 'react-native';

import Register from './Register';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Register />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 60 : 0,
  }
});
