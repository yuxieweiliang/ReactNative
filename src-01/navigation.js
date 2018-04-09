import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import Route from './route'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const config = {
  headerMode: 'screen',
  headerLeft: <View style={{
    width: 60,
  }}>
    <Icon name="bars" style={{alignSelf: 'center'}} size={30} color="#fff" />
  </View>,

  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}


export default StackNavigator({
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
        // title: 'title', // 跟在返回按钮后的文字、
        headerTitle: <Text style={{color: '#fff', fontSize: 16,  textAlign: 'center',  width: '100%'}}>headerTitle</Text>, // 跟在返回按钮后的文字、会覆盖title
        // headerBackTitle: 'headerBackTitle', // 跟在返回按钮后的文字、会覆盖title
        // headerLeft: <View><Text>Left</Text></View>, // 跟在返回按钮后的文字、会覆盖title
        headerRight: <Text style={{color: '#fff' }}>Right</Text>, // 跟在返回按钮后的文字、会覆盖title
        headerTitleStyle: {
          color: '#fff',
        },
        /*headerTintColor: {
         alignSelf: 'center',
         },*/
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
    initialRouteName: 'Home'
  }
);
