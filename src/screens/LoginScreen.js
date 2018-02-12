import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: ""
    };
  }

  handleChange(name, text) {
    this.setState({ [name]: text });
  }

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('signupScreen');
  };
  goToForgetPassword = () => {
    const { navigation } = this.props;
    navigation.navigate('forgottenPasswordScreen');
  };
  doLogin = () => {
    const { mail, password } = this.state;
    if(mail, password){
      const { navigation } = this.props;
      navigation.navigate('mainStack');
    }
    else {
      Alert.alert('Error', 'Complete all the fields to login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}> Login Screen </Text>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder="Enter your mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => this.handleChange("mail", text)}
          />
        </View>
        <View style={{ height: 80 }}>
          <TextInput
            secureTextEntry
            placeholder="Enter your password"
            onChangeText={text => this.handleChange("password", text)}
          />
        </View>
        <View style={styles.registerViewButton}>
          <Button
            onPress={this.doLogin}
            title="Enter | Log In"
          />
        </View>
        <View style={styles.registerViewButton}>
          <Button
            onPress={this.goToForgetPassword}
            title="Forgot Password"
          />
        </View>
        <View style={styles.registerViewButton}>
          <Button
            onPress={this.goToRegister}
            title="Register"
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