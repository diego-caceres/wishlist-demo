import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Register from '../components/Register';

export default class SignupScreen extends React.Component {

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
  },
});