import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen';

import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';

const NAVIGATION_OPTIONS_HEADERIMAGE = {
  headerTitleStyle: {
    color: 'blue',
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: Platform.OS === 'ios' ? 0 : 56
  },
  headerStyle: { backgroundColor: 'transparent' },
  headerBackTitle: null,
  headerTintColor: 'blue',
  gesturesEnabled: false
};

// login stack
const LoginStack = StackNavigator(
  {
    loginScreen: {
      screen: LoginScreen,
      navigationOptions: { header: null, title: 'Login Screen' }
    },
    signupScreen: {
      screen: SignupScreen,
      navigationOptions: { title: 'Sign Up Screen' }
    },
    forgottenPasswordScreen: {
      screen: ForgottenPasswordScreen,
      navigationOptions: { title: 'Forgot Password' }
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: NAVIGATION_OPTIONS_HEADERIMAGE
  }
);

const MainStack = StackNavigator(
  {
    homeScreen: {
      screen: HomeScreen,
      navigationOptions: { header: null, title: 'Home Screen' }
    },
    productsScreen: {
      screen: ProductsScreen,
      navigationOptions: { title: 'Products' }
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: NAVIGATION_OPTIONS_HEADERIMAGE
  }
);

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    loginStack: { screen: LoginStack },
    mainStack: { screen: MainStack }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack'
  }
);

export default PrimaryNav;