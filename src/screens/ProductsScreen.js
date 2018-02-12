import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import ProductsList from '../components/ProductsList';


const products = [
  {id: 1, name: 'Product 1', price: '$100'},
  {id: 2, name: 'Product 2', price: '$315'},
  {id: 3, name: 'Product 3', price: '$115'},
  {id: 4, name: 'Product 4', price: '$150'},
  {id: 5, name: 'Product 5', price: '$225'}
];

const wishProducts = [
  {id: 1, name: 'Wishlist Product 1', price: '$100'},
  {id: 2, name: 'Wishlist Product 2', price: '$315'},
  {id: 3, name: 'Wishlist Product 3', price: '$115'},
  {id: 4, name: 'Wishlist Product 4', price: '$150'},
  {id: 5, name: 'Wishlist Product 5', price: '$225'}
];

export default class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products, //[],
      wishListProducts: wishProducts, //[],
      showWishList: false
    }

  }
  toggleShow = () => {
    this.setState({ showWishList: !this.state.showWishList });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <View style={styles.switchButton}>
            <Button  
              onPress={this.toggleShow}
              title={this.state.showWishList ? "Show Products" : "Show Wishlist"} />
          </View>
        </View>
        <View style={{ flex: 1}}>
          <ProductsList 
            products={!this.state.showWishList ? this.state.products : this.state.wishListProducts}
            listTitle={!this.state.showWishList ? 'Products' : 'WishList' }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  switchButton: {
    alignSelf: 'flex-end',
    width: 100,
    borderWidth: 1,
    borderColor: 'grey'
  },
});