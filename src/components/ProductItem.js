import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity 
} from 'react-native';
const noImage = require('../assets/no-image.png');
const heart = require('../assets/heart-empty.png');
const heartFull = require('../assets/heart-full.png');

const ProductItem = (props) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={props.imageUrl ? {uri: props.imageUrl} : noImage} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.name} </Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
      <View style={styles.heartContainer}>
        <TouchableOpacity>
          <Image 
            source={props.isInWishList ? heartFull : heart}
            style={styles.heart}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  imageContainer: {
    flex: 2,
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 10,
    flex: 5,
  },
  heartContainer: {
    flex: 1,
  },
  icon: {
    height: 56,
    width: 56,
    marginRight: 32
  },
  heart: {
    height: 25,
    width: 25,
    alignSelf: 'center'
  },
  title: {
    fontSize: 13
  },
  price: {
    fontSize: 10
  }
});