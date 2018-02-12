import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProductsList from '../components/ProductsList';

export default class ProductsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ProductsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});