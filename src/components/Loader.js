import React from 'react';
import {
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const Loader = ({ onPress = () => {} }) => (
  <TouchableHighlight
    style={loaderStyles.container}
    onPress={onPress}
  >
    <ActivityIndicator size="large" color="white" />
  </TouchableHighlight>
);

export default Loader;

const loaderStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    opacity: 0.9,
    zIndex: 2000,
    justifyContent: 'center'
  }
});
