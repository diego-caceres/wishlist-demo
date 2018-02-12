import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from "react-native";
import ProductItem from './ProductItem';

const products = [
  {id: 1, name: 'Product 1', price: '$100'},
  {id: 2, name: 'Product 2', price: '$315'},
  {id: 3, name: 'Product 3', price: '$115'},
  {id: 4, name: 'Product 4', price: '$150'},
  {id: 5, name: 'Product 5', price: '$225'}
];

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products//[],
    }
  }

  renderRow = (item, index) => {
    
    return (
      <ProductItem 
        {...item} 
      />
    );
  }
  _keyExtractor = (item, index) => index+"";

  render() {
    return (
      <View style={styles.container}> 
        {this.state.products.length > 0 && <Text style={{textAlign: 'center'}}> Results: </Text>}
        <FlatList
          style={styles.listContainer}
          data={this.state.products}
          renderItem={({ item, index }) => this.renderRow(item, index)}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  listContainer: {
    flex: 1
  },
});