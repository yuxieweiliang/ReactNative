import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import Route from './route'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


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

export default TabNavigator({
    Home: {
      screen: Route.HomeScreen,
      // 这里可以设置所有的
      navigationOptions: {
        ...config
      },
    },
    Drawer: {
      screen: Route.DrawerScreen,
      // 这里可以设置所有的
      navigationOptions: {
        ...config
      },
    },
    Product: {
      screen: Route.ProductScreen,
      navigationOptions: {
        ...config,
      }
    },
    Details: {
      screen: Route.LoginScreen,
      navigationOptions: {
        ...config,
        header: null
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
  }
);
