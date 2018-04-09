import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import drawer from './drawer'
import Route from './route'

/**
 *
 * Route: 路由
 * drawer: 抽屉
 */
export default DrawerNavigator(Route, drawer);

