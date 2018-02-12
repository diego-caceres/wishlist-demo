import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';


export default class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      search: '',
      products: [],
      wishListProducts: [],
      showWishList: false
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ search: value});
  }

  toggleShow = () => {
    this.setState({ showWishList: !this.state.showWishList });
  }

  addRemoveToWishList = (item) => {
    // debugger;
    let wishListCopy = [...this.state.wishListProducts];
    const index = wishListCopy.findIndex(p => p.mpid === item.mpid);
    if(index === -1) {
      wishListCopy.push(item);
    }
    else {
      //Remove it
      wishListCopy = [
        ...this.state.wishListProducts.slice(0, index),
        ...this.state.wishListProducts.slice(index + 1)
      ];
    }

    this.setState({ 
      wishListProducts: wishListCopy, 
      products: [...this.state.products] 
    });
  }

  refreshSearch = () => {
    this.setState({ loading: true }, () => {
      fetch(`https://api.indix.com/v2/summary/products?countryCode=US&q=${this.state.search}&app_key=PDMaH4iogfVzfNQHJAGmVr2dv0bAbKPO`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log('Respuesta:', responseJson);
          if(responseJson.message === 'ok') {
            this.setState({
              products: responseJson.result.products,
              loading: false,
              search: ''
            });
          }
          else {
            this.setState({ loading: false, error: responseJson.message });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ loading: false, error});
          Alert.alert('An error has ocurred', error);
        });
    });
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
          {!this.state.showWishList && 
            <View style={{margin: 20}}>
              <TextInput 
                style={styles.input} 
                value={this.state.search} 
                onChangeText={this.handleChange}
                placeholder="Enter text to search"
              />
              <Button 
                onPress={this.refreshSearch}
                title="Search"/>
            </View>}
          <ProductsList 
            products={!this.state.showWishList ? this.state.products : this.state.wishListProducts}
            wishList={this.state.wishListProducts}
            listTitle={!this.state.showWishList ? 'Products' : 'WishList' }
            onAddRemoveToWishList={this.addRemoveToWishList}
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