import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, Dimensions, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { navigation } from 'react-navigation';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');

type Props = {};
export default class extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }
  _onPressButton() {
    this.props.navigation.goBack()
    this.props.navigation.navigate('DrawerOpen')
  }

  static navigationOptions = {
    drawerLabel: 'User',
    drawerIcon: ({ tintColor }) => (
      <Icon name="bars" size={30} color="#900" />
    ),
  };
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;


    let navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );



    return (
    <ImageBackground style={{height,width}} source={require('../../../assets/images/bg.jpg')} resizeMode='cover'>
      <View style={styles.container}>

        <Text style={styles.welcome}>
          设置页面
        </Text>

        <TouchableHighlight style={styles.button} onPress={() => this._onPressButton()}>
          <Text>返回</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
    );
  }
}
