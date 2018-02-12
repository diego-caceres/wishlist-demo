import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from "react-native";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      mail: "",
      password: "",
      confirmPassword: "",
      dummy1: "",
      dummy2: "",
      dummy3: "",
      dummy4: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Alert.alert(`The values entered are:
      Name: ${this.state.name}
      LastName: ${this.state.lastName}
      Mail: ${this.state.mail}
      Password: ${this.state.password}
      ConfirmPassword: ${this.state.confirmPassword}`);
  }
  handleChange(name, text) {
    this.setState({ [name]: text });
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
      <ScrollView>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder="Enter your name"
            onChangeText={text => this.handleChange("name", text)}
          />
        </View>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder="Enter your last name"
            onChangeText={text => this.handleChange("lastName", text)}
          />
        </View>
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
        <View style={{ height: 80 }}>
          <TextInput
            secureTextEntry
            placeholder="Confirm your password"
            onChangeText={text => this.handleChange("confirmPassword", text)}
          />
        </View>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder="Enter your dummy field"
            autoCapitalize="none"
            onChangeText={text => this.handleChange("dummy1", text)}
          />
        </View>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder="Enter your dummy field"
            autoCapitalize="none"
            onChangeText={text => this.handleChange("dummy2", text)}
          />
        </View>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder="Enter your dummy field"
            autoCapitalize="none"
            onChangeText={text => this.handleChange("dummy3", text)}
          />
        </View>
        <View style={{ height: 80 }}>
          <TextInput
            placeholder="Enter your dummy field"
            autoCapitalize="none"
            onChangeText={text => this.handleChange("dummy4", text)}
          />
        </View>
        <Button
          style={{ height: 80 }}
          onPress={this.handleClick}
          title="Confirm"
        />
      </ScrollView>
        
      </View>
    );
  }
}
