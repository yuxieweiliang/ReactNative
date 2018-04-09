import React, { Component } from 'react';
import DrawerView from './Drawer'
import Swiper from './InitSwiper'



export default class App extends React.Component {
  state = {
    init: false,
  }

  _onPressButton() {
    this.setState({init: false})
  }

  _changeIndex(index) {
    var _this = this
    if(index === 2) {
      setTimeout(function() {
        _this.setState({init: false})
      }, 4000)
    }
  }

  render() {
    const { init } = this.state

    if(init) {
      return <Swiper
        afterSwiper={() => this._onPressButton()}
        changeIndex={(i) => this._changeIndex(i)}/>
    } else {
      return <DrawerView/>
    }
  }
}