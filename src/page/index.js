import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ProductScreen from './product/index';
import LoginScreen from '../setting/login/index';
import Software from './software-01'

const config = {
  headerMode: 'screen',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const  pageRoute = {
  Home: {
    screen: Software,
    // 这里可以设置所有的
    navigationOptions: {
      ...config
    },
  },

  Product: {
    screen: ProductScreen,
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    },
  },

}


const InitView = StackNavigator(
  pageRoute,
  {
    initialRouteName: 'Login'
  }
);
export default InitView