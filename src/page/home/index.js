import React, { Component } from 'react';
import { Text, TouchableHighlight,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MenuView from '../../software-01'
// import MenuView from '../../../src-02/navigation'





export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    console.log(navigation)
    return {
      title: params ? params.otherParam : 'home',
    }
  };

  componentDidMount() {

  }

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {

   //  return <MenuView/>
    return (
      <View style={styles.wrapper}>
        <View style={styles.slide1}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <TouchableHighlight onPress={() => this._onPressButton()}>
              <Text>Home Screen</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

