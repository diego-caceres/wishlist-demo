import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {

  goToProducts = () => {
    const { navigation } = this.props;
    navigation.navigate('productsScreen');
  };
  
  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('loginStack');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}> Home Screen </Text>
       
        <View style={styles.registerViewButton}>
          <Button
            onPress={this.goToProducts}
            title="See Products"
          />
        </View>

        <View style={styles.registerViewButton}>
          <Button
            onPress={this.goToLogin}
            title="Log Out"
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  registerViewButton: {
    paddingBottom: 30
  },
});