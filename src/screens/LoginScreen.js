import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import I18n from '../locales/i18n';

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
      Alert.alert('Error', I18n.t('completeFields'));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}> {I18n.t('loginScreenTitle')} </Text>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder={I18n.t('enterEmail')}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => this.handleChange("mail", text)}
          />
        </View>
        <View style={{ height: 80 }}>
          <TextInput
            secureTextEntry
            placeholder={I18n.t('enterPassword')}
            onChangeText={text => this.handleChange("password", text)}
          />
        </View>
        <View style={styles.registerViewButton}>
          <Button
            onPress={this.doLogin}
            title={I18n.t('loginConfirm')}
          />
        </View>
        <View style={styles.registerViewButton}>
          <Button
            onPress={this.goToForgetPassword}
            title={I18n.t('forgotPassword')}
          />
        </View>
        <View style={styles.registerViewButton}>
          <Button
            onPress={this.goToRegister}
            title={I18n.t('register')}
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