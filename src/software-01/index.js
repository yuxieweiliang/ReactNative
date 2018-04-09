import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Route from './route'


const initConfig = {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
}

export default TabNavigator(Route, initConfig);
