import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from "react-native";
import ProductItem from './ProductItem';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRow = (item, index) => {
    const indexItem = this.props.wishList.findIndex(p => p.mpid === item.mpid);
    return (
      <ProductItem 
        {...item} 
        isInWishList={indexItem !== -1}
        onAddRemoveToWishList={() => this.props.onAddRemoveToWishList(item)}
      />
    );
  }
  _keyExtractor = (item, index) => index+"";

  render() {
    return (
      <View style={styles.container}> 
        {this.props.products.length > 0 && <Text style={{textAlign: 'center'}}> {this.props.listTitle}: </Text>}
        <FlatList
          style={styles.listContainer}
          data={this.props.products}
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